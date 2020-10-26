import client from "./client";

const callback = (func) => (err, res) => {
  if (err) {
    func(err);
  } else {
    func(null, res);
  }
};

export default {
  add(title, author, cb) {
    client.insert(
      { table: "books", records: [{ title, author }] },
      callback(cb)
    );
  },
        } else {
          cb(null, res);
        }
      }
    );
  },
};
