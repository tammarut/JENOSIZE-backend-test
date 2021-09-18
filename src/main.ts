import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (_req, res) => res.send("Hi!"));
app.listen(PORT, () => {
  console.info(`🚀 Server is running at https//localhost:${PORT}`);
});
