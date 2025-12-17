import express from "express";
import knexLibrary from "knex";

const app = express();
const PORT = 3000;

app.use(express.json());
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

const getUserCount = async () => {
  const result = await knex.raw(`SELECT COUNT(id) AS count FROM user`);
  return result[0]?.count || 0;
};

app.get("/", async (req, res) => {
  const userCount = await getUserCount();

  const html = `
    <!DOCTYPE html>
    <html lang="en" className="scroll-smooth">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tasks API</title>
        <style>
            body {
                background-color: #1b161f;
                font-family: Arial, sans-serif;
                color: #e1e8ec;
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
            }

            .header {
                text-align: center;
                margin-bottom: 30px;
                border-bottom: 2px solid #b4869f;
                padding-bottom: 15px;
            }

            .card {
                background: #28313b;
                border-radius: 8px;
                padding: 25px;
                margin: 20px 0;
                text-align: center;
                border: 1px solid #b4869f;
            }

            .count {
                font-size: 48px;
                font-weight: bold;
                color: #eca400;
                margin: 15px 0;
            }

            button {
                background: #eca400;
                color: #1b161f;
                border: none;
                padding: 12px 25px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 16px;
                font-weight: bold;
                margin-top: 10px;
            }

            button:hover {
                background: #d69400;
            }

            .endpoints {
                margin-top: 30px;
                background: #28313b;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #b4869f;
            }

            .endpoint {
                font-family: "Courier New", monospace;
                padding: 10px;
                border-bottom: 1px solid #1b161f;
                color: #e1e8ec;
            }

            .endpoint:last-child {
                border-bottom: none;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>Tasks API</h1>
        </div>
        
        <div class="card">
            <h2>Total Users</h2>
            <div class="count">${userCount}</div>
            <form method="GET" action="/">
                <button type="submit">Refresh Count</button>
            </form>
        </div>
        
        <div class="endpoints">
            <h3>Available Endpoints:</h3>
            <div class="endpoint">/:tableName</div>
            <div class="endpoint">/task/sort-by-due</div>
            <div class="endpoint">/task/not-done</div>
            <div class="endpoint">/user/:lastName</div>
            <div class="endpoint">/user-count</div>
        </div>
    </body>
    </html>`;

  res.send(html);
});

app.get("/:tableName", async (req, res) => {
  const { tableName } = req.params;

  if (!tableName) {
    const tables = await getAllTables();
    res.json(tables);
    return;
  }

  const tableExists = await knex.schema.hasTable(tableName);
  if (!tableExists) return notFound(req, res);

  const data = await knex.raw(`SELECT * FROM ${tableName}`);
  return res.json(data);
});

app.get("/task/sort-by-due", async (req, res) => {
  const tasksDue = await knex.raw(
    `SELECT title, due_date, s.name FROM task JOIN status s ON status_id = s.id ORDER BY due_date ASC`
  );
  return res.json(tasksDue);
});

app.get("/task/not-done", async (req, res) => {
  const tasksNotDone = await knex.raw(
    `SELECT title, due_date, s.name FROM task JOIN status s ON status_id = s.id  WHERE status_id IN (1, 2) ORDER BY due_date ASC`
  );
  return res.json(tasksNotDone);
});

app.get("/user/:lastName", async (req, res) => {
  const { lastName } = req.params;
  const userByLast = await knex.raw(
    `SELECT * FROM user WHERE name LIKE '%${lastName}%'`
  );
  if (!userByLast) return notFound(req, res);
  return res.json(userByLast);
});

app.get("/user-count", async (req, res) => {
  const count = await getUserCount();
  return res.json({ count });
});

const notFound = async (req, res) => {
  const htmlNotFound = `
<!DOCTYPE html>
    <html>
    <head>
        <title>404 - Not Found</title>
        <style>
           body {
    background-color: #1b161f;
    font-family: Arial, sans-serif;
    color: #e1e8ec;
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    text-align: center;
}

.error-container {
    background: #28313b;
    border-radius: 8px;
    padding: 40px 25px;
    margin: 20px 0;
    border: 1px solid #b4869f;
}

.error-code {
    font-size: 72px;
    font-weight: bold;
    color: #eca400;
    margin: 0;
}

.error-message {
    font-size: 24px;
    margin: 15px 0 25px 0;
    color: #e1e8ec;
}

.back-btn {
    background: #eca400;
    color: #1b161f;
    border: none;
    padding: 12px 30px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    margin-top: 20px;
}

.back-btn:hover {
    background: #d69400;
}

.error-hint {
    margin-top: 30px;
    color: #b4869f;
    font-style: italic;
}

.endpoints {
    margin-top: 30px;
    background: #28313b;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #b4869f;
    text-align: left;
}

.endpoint {
    font-family: "Courier New", monospace;
    padding: 8px;
    border-bottom: 1px solid #1b161f;
    color: #e1e8ec;
}

.endpoint:last-child {
    border-bottom: none;
}
        </style>
    </head>
    <body>
        <div class="error-container">
            <h1 class="error-code">404</h1>
            <p class="error-message">Page not found</p>
            <a href="/" class="back-btn">Go to Homepage</a>
            <p class="error-hint">The requested URL ${req.originalUrl} was not found</p>
        </div>
        
        <div class="endpoints">
            <h3>Available Endpoints:</h3>
            <div class="endpoint">/</div>
            <div class="endpoint">/:tableName</div>
            <div class="endpoint">/task/sort-by-due</div>
            <div class="endpoint">/task/not-done</div>
            <div class="endpoint">/user/:lastName</div>
            <div class="endpoint">/user-count</div>
        </div>
    </body>
    </html>
`;
  return res.status(404).send(htmlNotFound);
};

app.listen(PORT, () => {
  console.log(`Server ready on http://localhost:${PORT}`);
});
