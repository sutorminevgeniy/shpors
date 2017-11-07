// Основы
    typeof undefined    // "undefined"
    typeof 0            // "number"
    typeof true         // "boolean"
    typeof "foo"        // "string"
    typeof {}           // "object"
    typeof []           // "object"
    typeof null         // "object"
    typeof new Date;    // "object"
    typeof function(){} // "function"

    {}.toString.call(123);              // "[object Number]"
    {}.toString.call("строка");         // "[object String]"
    {}.toString.call([1, 2]);           // "[object Array]"
    {}.toString.call(new Date);         // "[object Date]"
    {}.toString.call({name: "Вася"});   // "[object Object]"

    function getClass(obj) {
        return {}.toString.call(obj).slice(8, -1);
    }

    /* Значение         Преобразуется в логические
    undefined, null     false
    Числа               Все true, кроме 0, NaN -- false.
    Строки              Все true, кроме пустой строки "" -- false
    Объекты             Всегда true */

    var user = { firstName: 'Василий' };
    alert( user ); // "[object Object]"
    alert( [1, 2] ); // toString для массивов выводит список элементов "1,2"
    alert( new Date ); // toString для дат выводит дату в виде строки
    alert( function() {} ); // toString для функции выводит её код

    alert( "Привет" );
    var years = prompt('Сколько вам лет?', 100);
    var isAdmin = confirm("Вы - администратор?");

    while (условие) {
      ...
    }

    do {
      ...
    } while (условие);

    outer: for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (!input) break outer; // 
      }
    }

    for (key in obj) {
      /* ... делать что-то с obj[key] ... */
    }

    switch (a) {
      case 3:
        alert( 'Маловато' );
        break;
      case 4:
        alert( 'В точку!' );
        break;
      default:
        alert( 'Я таких значений не знаю' );
    }

   
    var timerId = setTimeout(func / code, delay[, arg1, arg2...]);
    clearTimeout(timerId);

    var timerId = setInterval(func / code, delay[, arg1, arg2...]);
    clearInterval(timerId);

    var i = 1;
    setInterval(function() {
        func(i);
    }, 100);

    // Второй использует рекурсивный setTimeout:
    var i = 1;
    setTimeout(function run() {
        func(i);
        setTimeout(run, 100);
    }, 100);

    
    try {
        // пробуем выполнить код
        var user = JSON.parse(data); // <-- ошибка при выполнении
        alert( user.name ); // не сработает

        if (!user.name) {
            throw new SyntaxError("Данные некорректны");
        }
    } catch (e) {
        // перехватываем исключение
        if (e.name == "SyntaxError") {
            alert( "Извините, в данных ошибка" );
        } else {
            alert( "Извините, в данных ошибка, мы попробуем получить их ещё раз" );
            alert( e.name );
            alert( e.message );
        }
    } finally {
        // выполняем всегда ..
    }

// Функции

    // Function Expression
    var f = function() { ... }

    // Function Declaration
    function f() { ... }

    
    func.call(context, arg1, arg2, ...);
    func.apply(context, [arg1, arg2, ...]);

    function printArgs() {
        // вызов arr.slice() скопирует все элементы из this в новый массив
        var args = [].slice.call(arguments); // args - полноценный массив из аргументов
    }

    // получить максимум из элементов arr
    alert( Math.max.apply(null, arr) ); // 5

    function bind(func, context /*, args*/) {
        var bindArgs = [].slice.call(arguments, 2);
        function wrapper() {                        
            var args = [].slice.call(arguments);
            var unshiftArgs = bindArgs.concat(args);  
            return func.apply(context, unshiftArgs);  
        }
        return wrapper;
    }

    var wrapper = func.bind(context[, arg1, arg2...])

// Числа
    /* Значение     Преобразуется в число
    undefined       NaN
    null            0
    true / false    1 / 0
    Строка          Пробельные символы по краям обрезаются.
                    Далее, если остаётся пустая строка, то 0, 
                    иначе из непустой строки "считывается" число, 
                    при ошибке результат NaN. */

    Math.floor(x)           // Округляет вниз
    Math.ceil(x)            // Округляет вверх
    Math.round(x)           // Округляет до ближайшего целого

    Math.acos(x)            // Возвращает арккосинус x (в радианах)
    Math.asin(x)            // Возвращает арксинус x (в радианах)
    Math.atan(x)            // Возвращает арктангенс x (в радианах)
    Math.atan2(y, x)        // Возвращает угол до точки (y, x). Описание функции: Atan2.
    Math.sin(x)             // Вычисляет синус x (в радианах)
    Math.cos(x)             // Вычисляет косинус x (в радианах)
    Math.tan(x)             // Возвращает тангенс x (в радианах)

    Math.sqrt(x)            // Возвращает квадратный корень из x.
    Math.log(x)             // Возвращает натуральный (по основанию e) логарифм x.
    Math.pow(x, exp)        // Возводит число в степень. 
                            // Работает в том числе с дробными и отрицательными степенями.
    Math.abs(x)             // Возвращает абсолютное значение числа
    Math.exp(x)             // Возвращает ex, где e – основание натуральных логарифмов.
    Math.max(a, b, c...)    // Возвращает наибольший из списка аргументов
    Math.min(a, b, c...)    // Возвращает наименьший из списка аргументов
    Math.random()           // Возвращает псевдо-случайное число в интервале [0,1) 
                            // – то есть между 0(включительно) и 1(не включая).
                            // Генератор случайных чисел инициализуется текущим временем.

    parseInt('12px')     // 12
    parseFloat('12.3.4') // 12.3

    num.toFixed(precision)  // который округляет число num до точности precision и 
                            // возвращает результат в виде строки:

    // преобразуется ли строка в число
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    // Случайное целое от min до max
    function randomInteger(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    }

// Строки
    "Интерфейс".toUpperCase();      // ИНТЕРФЕЙС
    "Интерфейс" [0].toLowerCase();  // 'и'

    "Widget with id".indexOf("id", 2) // 12, поиск начат с позиции 2

    // Взятие подстроки: substr, substring, slice.
    substring(start, end)    // возвращает подстроку с позиции start до, но не включая end.
    substr(start [, length]) // Первый аргумент имеет такой же смысл, как и в substring, 
                             // а второй содержит не конечную позицию, а количество символов.
    slice(start [, end])     // возвращает подстроку с позиции start до, но не включая end.
                             // Если второго аргумента нет – подразумевается «до конца строки».
    /* Отрицательные аргументы интерпретируются как равные нулю. 
    Слишком большие значения усекаются до длины строки:
    Кроме того, если start > end, то аргументы меняются местами, 
    т.е. возвращается участок строки между start и end: */

    // метод split(s), который позволяет превратить строку в массив, 
    // разбив ее по разделителю s.
    "a,b,c,d".split(',', 2); // a,b

// Массивы
    var fruits = ["Яблоко", "Апельсин", "Груша"];

    Array.isArray([1,2,3]);

    // Конец массива
    fruits.pop();           // Удаляет последний элемент из массива и возвращает его
    fruits.push("Груша");   // Добавляет элемент в конец массива:

    // Начало массива
    fruits.shift();                     // Удаляет из массива первый элемент и возвращает его
    fruits.unshift("Ананас", "Лимон");  // Добавляет элемент в начало массива:
    // Методы push и unshift могут добавлять сразу по несколько элементов:

    for (var i = 0; i < arr.length; i++) {
        alert( arr[i] );
    }

    // метод split(s), который позволяет превратить строку в массив, 
    // разбив ее по разделителю s.
    "a,b,c,d".split(',', 2); // a,b
    // обратный метод.
    var arr = ['Маша', 'Петя', 'Марина', 'Василий'];
    arr.join(';'); // Маша;Петя;Марина;Василий

    delete arr[1]; // значение с индексом 1 удалено
                    // теперь arr = ['Маша', undefined, 'Марина', 'Василий'];

    arr.splice(index[, deleteCount, elem1, ..., elemN]);
    // Удалить deleteCount элементов, начиная с номера index, 
    // а затем вставить elem1, ..., elemN на их место. Возвращает массив из удалённых элементов.
    var arr = ["Я", "сейчас", "изучаю", "JavaScript"];
    arr.splice(0, 3, "Мы", "изучаем"); // теперь ["Мы", "изучаем", "JavaScript"]

    arr.slice(begin, end);
    // Метод копирует участок массива от begin до end, не включая end. 
    // Исходный массив при этом не меняется.
    var arr = ["Почему", "надо", "учить", "JavaScript"];
    var arr2 = arr.slice(1, 3); // надо, учить
    // Синтаксис метода slice одинаков для строк и для массивов. Тем проще его запомнить.

    var arr = [1, 2];
    var newArr = arr.concat([3, 4], 5); // то же самое, что arr.concat(3,4,5)
    alert( newArr ); // 1,2,3,4,5

    arr.indexOf(searchElement[, fromIndex]) 
    // Метод возвращает номер элемента searchElement в массиве arr или -1, если его нет.

    var arr = [1, 0, false];
    arr.indexOf(0);     // 1
    arr.indexOf(false); // 2
    arr.indexOf(null);  // -1

    arr.forEach(callback[, thisArg]);           // используется для перебора массива.
    arr.filter(callback[, thisArg])             // используется для фильтрации массива через функцию.
    arr.map(callback[, thisArg])                // используется для трансформации массива.
    arr.every(callback[, thisArg])              // возвращает true, если вызов callback вернёт true 
                                                // для каждого элемента arr.
    arr.some(callback[, thisArg])               // возвращает true, если вызов callback вернёт true 
                                                // для какого-нибудь элемента arr.
    arr.reduce(callback[, initialValue])        // используется для последовательной обработки каждого 
                                                // элемента массива с сохранением промежуточного результата.
    arr.reduceRight(callback[, initialValue])   // работает аналогично, но идёт по массиву справа-налево.
    // Он для каждого элемента массива вызывает функцию callback.
    // Этой функции он передаёт три параметра callback(item, i, arr):
    // item – очередной элемент массива.
    // i – его номер.
    // arr – массив, который перебирается.

// Объекты
    var o = new Object();
    var o = {};

    delete person.age;

    if ("name" in person) {
      alert( "Свойство name существует!" );
    }

    for (key in obj) {
      /* ... делать что-то с obj[key] ... */
    }

    let arr = Object.entries(obj)

    function User() {}
    var user = new User();
    alert( user instanceof User ); // true

    var arr = [];
    alert( arr instanceof Array ); // true
    alert( arr instanceof Object ); // true

    obj.hasOwnProperty(prop);   // возвращает true, если свойство prop принадлежит 
                                // самому объекту obj, иначе false.

    function inherit(proto) {
        function F() {};     
        F.prototype = proto;
        return new F;
    }

    if (!Object.create) {
        Object.create = function(proto) {
            function F() {}
            F.prototype = proto;
            return new F;
        };
    }
    
    // --------- Класс-Родитель ------------
    // Конструктор родителя пишет свойства конкретного объекта
    function Animal(name) {
      this.name = name;
      this.speed = 0;
    }

    // Методы хранятся в прототипе
    Animal.prototype.run = function() {
      alert(this.name + " бежит!")
    }

    // --------- Класс-потомок -----------
    // Конструктор потомка
    function Rabbit(name) {
      Animal.apply(this, arguments);
    }

    // Унаследовать
    Rabbit.prototype = Object.create(Animal.prototype);

    // Желательно и constructor сохранить
    Rabbit.prototype.constructor = Rabbit;

    // Методы потомка
    Rabbit.prototype.run = function() {
      // Вызов метода родителя внутри своего
      Animal.prototype.run.apply(this);
      alert( this.name + " подпрыгивает!" );
    };

    // Готово, можно создавать объекты
    var rabbit = new Rabbit('Кроль');
    rabbit.run();

    