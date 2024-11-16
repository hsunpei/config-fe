module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "next/core-web-vitals",
    // recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react/recommended",
    "plugin:mdx/recommended",
    // uses eslint-config-prettier to disable ESLint rules
    "prettier",
    // displays prettier errors as ESLint errors
    "plugin:prettier/recommended",
    "plugin:json/recommended",
    // React 17
    "plugin:react/jsx-runtime",
  ],
  plugins: ["@typescript-eslint", "json", "import"],
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
    camelcase: "off",
    // ======================================================
    // Import rules
    // ======================================================
    // Ref: https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
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
    "react/display-name": "off",
    // disable default props check
    "react/prop-types": "off",
    "react/require-default-props": "off",

    // ======================================================
    // Typescript rules
    // ======================================================
    "@typescript-eslint/explicit-function-return-type": "off",

    // turn of no-unused-vars and turn on @typescript-eslint/no-unused-vars
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",

    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",

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
    jest: true,
  },
};
