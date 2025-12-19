import express from "express";
import knexLibrary from "knex";

const app = express();
const PORT = 3000;

const dbFile =
  "/Users/hyf/Desktop/HYF/projects/hackYourFuture-homework/courses/foundation/databases/tasks.sqlite3";

const knex = knexLibrary({
  client: "sqlite3",
  connection: {
    filename: dbFile,
  },
  useNullAsDefault: true,
});

const getAllTables = async () => {
  const tables = await knex.raw(`SELECT name FROM sqlite_schema`);
  return tables;
};

app.get("/", async (req, res) => {
  const tables = await getAllTables();
  res.json(tables);
});

app.get("/:tableName", async (req, res) => {
  const { tableName } = req.params;

  if (!tableName) {
    const tables = await getAllTables();
    res.json(tables);
  }

  const data = await knex.raw(`SELECT * FROM ${tableName}`);
  return res.json(data);
});

app.post("/status/:id/:name", async (req, res) => {
  const { id, name } = req.params;

  if (!id || !name || name.length === 0) return res.sendStatus(400);

  await knex("status").insert({ id: Number.parseInt(id), name });
  const table = await knex("status");
  res.json(table);
});

app.listen(PORT, () => {
  console.log(`Server ready on http://localhost:${PORT}`);
});
