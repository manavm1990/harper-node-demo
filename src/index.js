import express from "express";
import { config } from "dotenv";

import api from "api";

config();

const app = express();

// Use 'qs' instead of 'queryString' to parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_, res) => {
  res.end("Express Server");
});

app.use("/books", api);

app.listen(process.env.PORT, () => {
  console.log("Server 🏃🏽‍♂️", process.env.PORT);
});
