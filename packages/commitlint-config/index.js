module.exports = {
  extends: ["gitmoji"],
  rules: {
    "type-empty": [
      1,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "chore", "revert"],
    ],
  },
};
