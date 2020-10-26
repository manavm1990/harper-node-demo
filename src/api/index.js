import { Router } from "express";

import db from "db";

const router = new Router();

router.get("/", (_, res) => {
  res.send("📖");
});

router.post("/add", ({ body: { title, author } }, res, next) => {
  db.add(title, author, (err, dbRes) => {
    if (err) {
      next(
        new Error(`
      ❗Error adding ➕ 📖
      ${err.error}
      `)
      );
    }
    res.status(201);
    res.json(dbRes);
  });
});

router.post("/search", ({ body }, res, next) => {
  db.search(body, (err, dbRes) => {
    if (err) {
      next(
        new Error(`
      ❗Error searching 🔍
      ${err.error}
      `)
      );
    }
    res.status(200);
    res.json(dbRes);
  });
});

router.delete("/", ({ body: { id } }, res, next) => {
  db.delete(id, (err, dbRes) => {
    if (err) {
      next(
        new Error(`
      ❗Error deleting 🔥 📖
      ${err.error}
      `)
      );
    }
    res.status(204);
    res.json(dbRes);
  });
});

export default router;
