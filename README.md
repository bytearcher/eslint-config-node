# eslint-config

Install dependencies

    npm install --save-dev bytearcher/eslint-config-node eslint eslint-plugin-jest eslint-plugin-promise  eslint-plugin-import
    npm install --save-dev prettier

Setup .eslintrc.js

    module.exports = {
      extends: ["@bytearcher/eslint-config-node"]
    };

Setup .prettierrc

    {
      "printWidth": 150,
      "jsxBracketSameLine": true,
      "arrowParens": "always"
    }
