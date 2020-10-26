module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: { "no-unused-vars": "warn" },
    "import/no-unresolved": [1, { ignore: ["api", "db"] }],
};
