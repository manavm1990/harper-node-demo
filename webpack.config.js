module.exports = {
  target: "node",

  // TODO: Handle 'production' mode
  mode: "development",
  entry: "./src/index.js",
  resolve: {
    modules: ["src", "node_modules"],
  },
};
