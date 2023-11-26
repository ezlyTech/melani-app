## Quick start

- Recommended `Node.js v18.x`.
- **Install:** `yarn install`
- **Start:** `yarn dev`
- **Build:** `yarn build`

## VS Code Config

- install esLint extension

1. Create `.vscode` folder in root
2. Inside this folder, create new `settings.json` file.
3. Place this code inside `settings.json` file.
   ```cmd
       {
       "javascript.format.enable": true,
       "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
       },
       "eslint.validate": [
       "javascript",
       "javascriptreact"
       ],
       "[javascript]": {
       "editor.tabSize": 2
       },
       "[javascriptreact]": {
       "editor.tabSize": 2
       },
       "eslint.workingDirectories": [
       {
       "directory": "./src/web",
       "changeProcessCWD": true
       }
       ],
       "javascript.updateImportsOnFileMove.enabled": "always",
       "javascript.preferences.importModuleSpecifier": "non-relative",
       "javascript.validate.enable": false,
       "editor.formatOnSave": true,
       "eslint.runtime": "/Users/elizmariemanalo/.nvm/versions/node/v18.1.0/bin/node"
       }
   ```
4. Replace the `eslint.runtime` with the path of your node. Try running `which node` or `where node` to locate it.
