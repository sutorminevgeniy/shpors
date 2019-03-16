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
npm uninstall -g http-server


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


npm install -g nodemon
npm install --save-dev nodemon

nodemon [your node app]

/*---------------- module -----------------*/
// debug
npn i -g node-inspector // сейчас встроено в node.js
node --inspect app
chrome://inspect


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