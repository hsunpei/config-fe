module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:import/typescript",
    // recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended",
    "plugin:mdx/recommended",
    // uses eslint-config-prettier to disable ESLint rules
    "prettier/@typescript-eslint",
    // displays prettier errors as ESLint errors
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "react-hooks"],
  parserOptions: {
    // allows for the parsing of modern ECMAScript features
    ecmaVersion: 2018,
    // allows for the use of imports
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // ======================================================
    // Import rules
    // ======================================================
    // Ref: https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],

    // ======================================================
    // React rules
    // ======================================================
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-props-no-spreading": [
      "error",
      {
        custom: "ignore",
      },
    ],
    "react/prop-types": "off",
    "react/display-name": "off",

    // ======================================================
    // Typescript rules
    // ======================================================
    "@typescript-eslint/explicit-function-return-type": "off",

    // ======================================================
    // A11y rules
    // ======================================================
    "jsx-a11y/accessible-emoji": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
  },
};
