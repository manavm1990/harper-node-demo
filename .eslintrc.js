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
  rules: {
    "import/no-unresolved": [1, { ignore: ["api", "db"] }],
    "import/prefer-default-export": 1,
    "no-unused-vars": ["warn", { varsIgnorePattern: "^_" }],
  },
};
