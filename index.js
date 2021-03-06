module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:jest/recommended", "prettier", "plugin:promise/recommended", "plugin:import/errors"],
  plugins: ["sort-requires"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  rules: {
    "callback-return": "off",
    "consistent-return": "off",
    curly: ["error", "all"],
    eqeqeq: ["error"],
    "func-style": ["error", "declaration", { allowArrowFunctions: false }],
    "global-require": ["error"],
    "guard-for-in": ["error"],
    "handle-callback-err": ["error"],
    "import/first": "error",
    "import/order": ["error", { "newlines-between": "always", groups: [["builtin", "external"]] }],
    "jest/expect-expect": "off",
    "jest/no-standalone-expect": "off",
    "jest/no-test-callback": "off",
    "linebreak-style": ["error", "unix"],
    "max-classes-per-file": ["error"],
    "new-cap": ["error"],
    "no-buffer-constructor": ["error"],
    "no-extra-bind": ["error"],
    "no-floating-decimal": ["error"],
    "no-implicit-coercion": ["error"],
    "no-return-await": ["error"],
    "no-sequences": ["error"],
    "no-unused-vars": ["error", { args: "none" }],
    "no-var": ["error"],
    "object-shorthand": "error",
    "prefer-arrow-callback": ["error"],
    "prefer-const": ["error"],
    "prefer-promise-reject-errors": ["error"],
    "promise/prefer-await-to-then": "error",
    "sort-requires/sort-requires": "error",
    yoda: ["error"]
  }
};
