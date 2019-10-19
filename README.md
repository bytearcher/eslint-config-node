# eslint-config

Install dependencies

    npm install --save-dev <this package>
    npm install --save-dev eslint-plugin-jest
    npm install --save-dev eslint-plugin-prettier

Setup .eslintrc.js

    module.exports = {
      extends: ["@bytearcher/eslint-config/eslintrc-node"]
    };
