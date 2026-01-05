import express from "express";

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from exercise 1!");
});

app.get("/currentYear", (req, res) => {
  const date = new Date().getFullYear();
  res.send(date);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
