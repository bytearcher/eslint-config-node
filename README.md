# eslint-config

Install dependencies

    npm install --save-dev bytearcher/eslint-config-node eslint eslint-plugin-jest eslint-plugin-promise eslint-plugin-import eslint-plugin-sort-requires
    npm install --save-dev prettier

Setup .eslintrc.js

    cat > .eslintrc.js << EOF 
    module.exports = {
      extends: ["@bytearcher/eslint-config-node"]
    };
    EOF
    

Setup .prettierrc

    cat > .prettierrc << EOF 
    {
      "printWidth": 150,
      "jsxBracketSameLine": true,
      "arrowParens": "always"
    }
    EOF
    
