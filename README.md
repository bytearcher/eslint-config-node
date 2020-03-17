# eslint-config

Copy & paste the following to your terminal.

    # Install dependencies

    npm install --save-dev bytearcher/eslint-config-node eslint eslint-plugin-jest eslint-plugin-promise eslint-plugin-import eslint-plugin-sort-requires
    npm install --save-dev prettier

    # Setup .eslintrc.js

    cat > .eslintrc.js << EOF 
    module.exports = {
      extends: ["@bytearcher/eslint-config-node"]
    };
    EOF
    

    # Setup .prettierrc

    cat > .prettierrc << EOF 
    {
      "printWidth": 150,
      "jsxBracketSameLine": true,
      "arrowParens": "always"
    }
    EOF
    
    find -type f \( -iname \*.js -o -iname \*.jsx -o -iname \*.json -o -iname \*.ts -o -iname \*.tsx \) -not -path '*node_modules/*' -exec npx eslint --fix \{\} \;
    find -type f \( -iname \*.js -o -iname \*.jsx -o -iname \*.json -o -iname \*.ts -o -iname \*.tsx \) -not -path '*node_modules/*' -exec npx prettier --write \{\} \;
    
    echo Done
    
