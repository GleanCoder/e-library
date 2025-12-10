import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ Message: "Welcome to e-library apis " });
});

export default app;
