// создание проекта (package.json)
npm init

/* npmjs.org */
// установка модуля
npm install --save express
(npm install --save-dev express)
// установка модулей в package.json
npm install
(npm i)
// глобально
npm install --g express

// удаление модуля
npm remove express

// удаление не используемых модулей
npm prune

// обновление всех модулей
npm update

// запуск приложения
node app
node app.js

// подсказка
npm help prune


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
var vasya = new user.User("Вася");
var petya = new user.User("Петя");

vasya.hello(petya);