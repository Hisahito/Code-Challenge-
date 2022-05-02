## CODE CHALLANGE PRACTICE 5 FROM WEEKLY_MISSION_4 BACKEND BOOTCAMP LAUNCHX

#Dependencies:

1 Express in/for server side
> npm install express --save
✔ in package.json file:
```javascript
"scripts": {
    "server": "node ./lib/server.js"
}
```
2 Jest for testing our code
> npm install jest@26.0.0 --save
✔ in package.json file:
```javascript
"scripts": {
    "test": "node ./node_modules/.bin/jest"
}
```
3 Linter for code styling

> npm install eslint --save
> npm init @eslint/config 
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · commonjs
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JavaScript
Successfully created .eslintrc.js file in /Users/hisahito/Desktop/playbookHisahito/weekly_mission_4/code-challenge

✔ in package.json file:
```javascript
"scripts": {
    "linter": "node ./node_modules/eslint/bin/eslint.js .",
    "linter-fix": "node ./node_modules/eslint/bin/eslint.js . --fix",
}
```
✔ in .eslintrc.js file:
```javascript
"rules": {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
    }
```

