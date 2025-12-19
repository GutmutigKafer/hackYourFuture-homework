import express from "express";
import knex from "knex";

const app = express();
const port = 3000;

// This connects to the database stored in the file mentioned below
const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename:
      "/Users/hyf/Desktop/HYF/projects/hackYourFuture-homework/courses/foundation/databases/tasks.sqlite3",
  },
  useNullAsDefault: true, // Omit warning in console
});

app.get("/", (req, res) => {
  res.send("Hello from exercise 2!");
});

// Here is an example of the first route, /all-users, which returns all users sorted by their ID
app.get("/all-users", async (req, res) => {
  const usersAll = await knexInstance.raw(
    "SELECT * FROM user ORDER BY id ASC;"
  );
  res.json(usersAll);
});

app.get("/all-tasks", async (req, res) => {
  const tasksAll = await knexInstance.raw(
    "SELECT * FROM task ORDER BY created ASC;"
  );
  res.json(tasksAll);
});

app.get("/tasks-not-done", async (req, res) => {
  const tasksNotDone = await knexInstance.raw(
    "SELECT title, status.name AS status_name FROM task JOIN status ON status_id = status.id WHERE status.name <> 'Done';"
  );
  res.json(tasksNotDone);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
