1. npm install ...
2. npm install shrinkpack --save-dev
3. scripts: "package": "npm prune && npm dedupe && npm shrinkwrap && shrinkpack"
4. npm run package
5. git commit
