// установка модулей
// глобально
npm install webpack -g
npm install --g webpack

// локально
npm install webpack --save-dev

// вызов
webpack main.js bundle.js
webpack
// с минификацией
webpack -p


// простейший модуль статики
// установка (глобально)
npm install --g node-static
// запуск
static &

// jquery
npm install jquery --save
var $ = require("jquery");

// package.json
"scripts": {
    "start": "webpack --config webpack.config.js"
}