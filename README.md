## CODE CHALLANGE PRACTICE 5 FROM WEEKLY_MISSION_4 BACKEND BOOTCAMP LAUNCHX

Requerimientos:

Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500.
Agregar pruebas automatizadas con GitHub Actions.

Dependencies:

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

Se diseñaron
```mermaid
  graph TD;
    visualpartner.json-->FileReader-->ConsulterServices-->StudentsControllers-->|Unit Tests| Server--> C{API}
    C --> v1/students/
    C --> v1/students/emails
    C --> v1/students/number/credits
```

##How this API works:
    This API respond to specific query params for each requeriment and expuse all data in JSON.
    Server is hosting on localhost:3000


#VisualPartnerAPI all students are running in localhost:3000/v1/students
<img width="1440" alt="Captura de Pantalla 2022-05-02 a la(s) 22 47 43" src="https://user-images.githubusercontent.com/83984969/166402440-27026414-5625-4a27-b33e-88eff9bc08f9.png">


#VisualPartnerAPI all emails from certificated students are running in localhost:3000/v1/students/email
<img width="1440" alt="Captura de Pantalla 2022-05-02 a la(s) 22 48 24" src="https://user-images.githubusercontent.com/83984969/166402503-ad25877a-1250-4d4a-aea7-d25a5d85ce71.png">


#VisualPartnerAPI all students with credits up to 500 are running in localhost:3000/v1/students/numbers/credits
<img width="1440" alt="Captura de Pantalla 2022-05-02 a la(s) 22 48 39" src="https://user-images.githubusercontent.com/83984969/166402511-201a94b9-d9e2-4383-b52f-2fded09686b3.png">


# hoping this can help anyone in a near future like this helps me today. love.
