module.exports = {
  processors: ["stylelint-processor-styled-components"],
  extends: [
    "stylelint-config-recommended",
    "stylelint-prettier/recommended",
    "stylelint-config-styled-components",
    "stylelint-config-idiomatic-order",
  ],
  rules: {
    "block-closing-brace-newline-after": "always",
    "prettier/prettier": true,
  },
};
