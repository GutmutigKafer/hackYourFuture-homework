import express from "express";
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/users", (req, res) => {
  res.send("User list");
});
app.post("/users", (req, res) => {
  const { name, email, phone = null } = req.body;
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
