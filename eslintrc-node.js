module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  // extends: "eslint:all",
  extends: ["eslint:recommended", "plugin:jest/recommended", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    "no-var": ["error"],
    "prefer-const": ["error"],
    "consistent-return": ["error"],
    eqeqeq: ["error"],
    "guard-for-in": ["error"],
    "max-classes-per-file": ["error"],
    "no-extra-bind": ["error"],
    "no-floating-decimal": ["error"],
    "no-implicit-coercion": ["error"],
    "no-return-await": ["error"],
    "no-sequences": ["error"],
    "prefer-promise-reject-errors": ["error"],
    // "require-await": ["error"],
    yoda: ["error"],
    "callback-return": ["error"],
    "global-require": ["error"],
    "handle-callback-err": ["error"],
    "no-buffer-constructor": ["error"],
    "func-style": ["error", "declaration", { allowArrowFunctions: false }],
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "new-cap": ["error"],
    "prefer-arrow-callback": ["error"]
    // "prefer-destructuring": ["error"]
  }
};
