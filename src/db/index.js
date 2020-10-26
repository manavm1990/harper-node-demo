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
  search(searchParams, cb) {
    const { id } = searchParams;
    if (id) {
      client.searchByHash(
        {
          table: "books",
          hashValues:
            // ⚠️ MUST be wrapped in an ARRAY
            [id],

          // Only send back 'title'
          attributes: ["title"],
        },
        callback(cb)
      );
    } else {
      const searchParamsEntries = Object.entries(searchParams);
      client.searchByValue(
        {
          table: "books",
          searchAttribute: searchParamsEntries[0][0],
          searchValue: searchParamsEntries[0][1],
          attributes: ["*"],
        },
        callback(cb)
      );
    }
  },
  delete(id, cb) {
    client.delete(
      {
        table: "books",
        hashValues: [id],
      },
      callback(cb)
    );
  },
};
