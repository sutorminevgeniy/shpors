// создание проекта (package.json)
npm init
npm init -y

/* npmjs.org */
// установка модуля
npm install --save express
npm install --save express@3.5.0
(npm install --save-dev express)
// установка модулей в package.json
npm install
(npm i)
// глобально
npm install --g express
// Установка определённой версии пакета
npm install http-server@0.3.0

// удаление модуля
npm remove express
// удаление не используемых модулей
npm prune
// обновление всех модулей
npm update
// Удаление локально установленного пакета
npm uninstall http-server
npm uninstall express
// Удаление глобально установленного пакета
npm uninstall http-server -g


// установленные пакеты
npm list
npm ls
// показывает установленные глобально пакеты
npm list -g --depth=0


// запуск приложения
node app
node app.js

// подсказка
npm help prune

// простейший модуль статики
// установка (глобально)
npm install --g node-static
// запуск
static &


/*---------------- Code -------------------*/
// Module
// user.js
function User(name){
    this.name = name;
}

User.prototype.hello = function(who){
    console.log("Hello, " + who.name);
};

console.log("user.js is required!");

exports.User = User;

// server.js
var user = require('user');

var vasya = new user.User("Вася");
var petya = new user.User("Петя");

vasya.hello(petya);