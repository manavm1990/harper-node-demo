import client from "./client";

export default {
  add(title, author, cb) {
    return client.insert(
      { table: "books", records: [{ title, author }] },
      (err, res) => {
        if (err) {
          cb(err);
        } else {
          cb(null, res);
        }
      }
    );
  },
};
