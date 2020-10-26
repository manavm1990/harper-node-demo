import express from "express";

import { config } from "dotenv";

config();

const app = express();

app.get("/", (_, res) => {
  res.end("Express Server");
});

app.listen(process.env.PORT, () => {
  console.log("Server 🏃🏽‍♂️", process.env.PORT);
});
