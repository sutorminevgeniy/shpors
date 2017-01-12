// Навигация

    document.documentElement // <HTML>
    document.body // <BODY>

    document.getElementById('content');
    elem.getElementsByTagName('div');
    elem.getElementsByName(attrName);
    elem.getElementsByClassName(className); // кроме IE8-.

    elem.querySelectorAll(css) //включая IE8+ (в режиме соответствия стандарту).    
    elem.querySelector(css)
    elem.matches(css)   // Метод ничего не ищет, а проверяет, удовлетворяет ли elem селектору css. 
                        // Он возвращает true либо false. Не поддерживается в IE8-.

    parent.contains(child); // Возвращает true, если parent содержит child или parent == child.

    parentNode, childNodes, firstChild, lastChild
    document.body.childNodes[i]

    children // только дочерние узлы-элементы, то есть соответствующие тегам.
    firstElementChild, lastElementChild // соответственно, первый и последний дети-элементы.
    previousElementSibling, nextElementSibling // соседи-элементы.
    parentElement // родитель-элемент.

    // Особые ссылки для таблиц
    // TABLE
    table.rows // коллекция строк TR таблицы.
    table.caption/tHead/tFoot // ссылки на элементы таблицы CAPTION, THEAD, TFOOT.
    table.tBodies // коллекция элементов таблицы TBODY, по спецификации их может быть несколько.
    // THEAD/TFOOT/TBODY
    tbody.rows // коллекция строк TR секции.
    // TR
    tr.cells // коллекция ячеек TD/TH
    tr.sectionRowIndex // номер строки в текущей секции THEAD/TBODY
    tr.rowIndex // номер строки в таблице
    // TD/TH
    td.cellIndex // номер ячейки в строке

    document.forms.my // форма с именем 'my'
    document.forms[0] // первая форма в документе
    form.elements // Любой элемент формы form можно получить аналогичным образом

// Свойства

    elem.nodeType // Тип узла содержится в его свойстве
        ELEMENT_NODE = 1;
        ATTRIBUTE_NODE = 2;
        TEXT_NODE = 3;
        CDATA_SECTION_NODE = 4;
        ENTITY_REFERENCE_NODE = 5;
        ENTITY_NODE = 6;
        PROCESSING_INSTRUCTION_NODE = 7;
        COMMENT_NODE = 8;
        DOCUMENT_NODE = 9;
        DOCUMENT_TYPE_NODE = 10;
        DOCUMENT_FRAGMENT_NODE = 11;
        NOTATION_NODE = 12;

    elem.nodeName
    elem.tagName // есть только у элементов Element 
                 // (в IE8- также у комментариев, но это ошибка в браузере).

    elem.innerHTML // содержимое элементаю Можно изменять.
    document.body.innerHTML = 'Новый BODY!'; // заменяем содержимое

    outerHTML // содержит HTML элемента целиком.
              // При записи в elem.outerHTML переменная elem сохраняет старый узел.

    elem.data // содержимое текстового узла

    elem.textContent; // содержит только текст внутри элемента, за вычетом всех <тегов>.

    elem.hasAttribute(name) // проверяет наличие атрибута
    elem.getAttribute(name) // получает значение атрибута
    elem.setAttribute(name, value) // устанавливает атрибут
    elem.removeAttribute(name) // удаляет атрибут

    a.href = '/';
    alert( 'атрибут:' + a.getAttribute('href') ); // '/'
    alert( 'свойство:' + a.href );  // полный URL
    // Атрибуту "class" соответствует свойство className.

    input.value = "Новое значение";
    textarea.value = "Новый текст";

    // Селект в JavaScript можно установить двумя путями: поставив значение select.value, 
    // либо установив свойство select.selectedIndex в номер нужной опции.:
    select.selectedIndex = 0; // первая опция
    // Установка selectedIndex = -1 очистит выбор.

    option = new Option(text, value, defaultSelected, selected);
    // text – содержимое,
    // value – значение,
    // defaultSelected и selected поставьте в true, чтобы сделать элемент выбранным.
    // Его можно использовать вместо document.createElement('option'), например:

    var option = new Option("Текст", "value");
    // создаст <option value="value">Текст</option>
    // Такой же элемент, но выбранный:
    var option = new Option("Текст", "value", true, true);

// Полифиллы

    if (document.documentElement.firstElementChild === undefined) { 
        Object.defineProperty(Element.prototype, 'firstElementChild', {
            get: function() {
                var el = this.firstChild;
                do {
                    if (el.nodeType === 1) {
                        return el;
                    }
                    el = el.nextSibling;
                } while (el);

                return null;
            }
        });
    }

// Добавление и удаление узлов

    // Создает новый элемент с указанным тегом:
    var div = document.createElement('div');

    // Создает новый *текстовый* узел с данным текстом:
    var textElem = document.createTextNode('Тут был я');

    // Добавление элемента: 
    parentElem.appendChild(elem) // Добавляет elem в конец дочерних элементов parentElem.
    parentElem.insertBefore(elem, nextSibling)  // Вставляет elem в коллекцию детей parentElem, 
                                                // перед элементом nextSibling.
                                                // если вторым аргументом указать null, 
                                                // то insertBefore сработает как appendChild:

    // Клонирование узлов
    elem.cloneNode(true)    // создаст «глубокую» копию элемента – вместе с атрибутами, 
                            // включая подэлементы. Если же вызвать с аргументом false, 
                            // то копия будет сделана без дочерних элементов. 
                            // Это нужно гораздо реже

    // Удаление узлов: removeChild
    parentElem.removeChild(elem) // Удаляет elem из списка детей parentElem.
    parentElem.replaceChild(newElem, elem)  // Среди детей parentElem удаляет elem 
                                            // и вставляет на его место newElem.

    // Добавление множества узлов
    ul.innerHTML += "<li>1</li><li>2</li>...";

    elem.insertAdjacentHTML(where, html);
    //Метод insertAdjacentHTML позволяет вставлять произвольный HTML в любое место документа, 
    //в том числе и между узлами!
    // кроме Firefox меньше версии 8, ну а там его можно эмулировать.
    // Синтаксис:
    // html - Строка HTML, которую нужно вставить
    // where - Куда по отношению к elem вставлять строку. Всего четыре варианта:
    // 1. `beforeBegin` -- перед `elem`.
    // 2. `afterBegin` -- внутрь `elem`, в самое начало.
    // 3. `beforeEnd` -- внутрь `elem`, в конец.
    // 4. `afterEnd` -- после `elem`.

    var fragment = document.createDocumentFragment();
    fragment.appendChild(node); // В него можно добавлять другие узлы.
    fragment.cloneNode(true); // клонирование с подэлементами
    ul.appendChild(fragment); // вместо фрагмента вставятся элементы списка

    Метод document.write(str) // работает только пока HTML-страница находится в процессе загрузки.
                              // Он дописывает текст в текущее место HTML ещё до того, 
                              // как браузер построит из него DOM.

// Стили элемента

    element.style // возвращает объект, который дает доступ к стилю элемента на чтение и запись.

    alert( document.body.style.marginTop ); // "20px"
    element.style.width = "100px";
    elem.style.borderLeftWidth
    elem.style.MozBorderRadius = '5px'; // с преффиксами

    // Строка стилей
    div.style.cssText = "color: red !important; \
                        background-color: yellow; \
                        width: 100px; \
                        text-align: center; \
                        blabla: 5; \
                        ";
    alert(div.style.cssText);
    // При установке style.cssText все предыдущие свойства style удаляются.

    // Полный стиль
    getComputedStyle(element[, pseudo])
    // element - Элемент, значения для которого нужно получить
    // pseudo - Указывается, если нужен стиль псевдо-элемента, например "::before". 
    // Пустая строка или отсутствие аргумента означают сам элемент.
    // Поддерживается всеми браузерами, кроме IE8-.
    // требует полное свойство!

    var computedStyle = getComputedStyle(document.body);
    alert( computedStyle.marginTop ); // выведет отступ в пикселях
    alert( computedStyle.color ); // выведет цвет

    // Чтобы код работал и в старых и новых браузерах, обычно пишут кросс-браузерный код, 
    // наподобие такого:
    function getStyle(elem) {
      return window.getComputedStyle ? getComputedStyle(elem, "") : elem.currentStyle;
    }
    // Если вы откроете такой документ в IE8-, то размеры будут в процентах, 
    // а в современных браузерах – в пикселях.

// Размеры
 
    // У элементов есть следующие метрики:

    offsetParent                // «родитель по дереву рендеринга» – ближайшая ячейка таблицы, 
                                // body для статического позиционирования или ближайший 
                                // позиционированный элемент для других типов позиционирования.
    offsetLeft/offsetTop        // позиция в пикселях левого верхнего угла блока, 
                                // относительно его offsetParent.
    offsetWidth/offsetHeight    // «внешняя» ширина/высота блока, включая рамки.
    clientLeft/clientTop        // отступ области содержимого от левого-верхнего угла элемента. 
                                // Если операционная система располагает вертикальную прокрутку 
                                // справа, то равны ширинам левой/верхней рамки, 
                                // если же слева (ОС на иврите, арабском), 
                                // то clientLeft включает в себя прокрутку.
    clientWidth/clientHeight    // ширина/высота содержимого вместе с полями padding, 
                                // но без полосы прокрутки.
    scrollWidth/scrollHeight    // ширина/высота содержимого, включая прокручиваемую область. 
                                // Включает в себя padding и не включает полосы прокрутки.
    scrollLeft/scrollTop        // ширина/высота прокрученной части документа, 
                                // считается от верхнего левого угла.

    
    // Для получения размеров видимой части окна: 
    document.documentElement.clientWidth/Height

    // Для получения размеров страницы с учётом прокрутки:
    var scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    // Прокрутку окна можно получить как 
    window.pageYOffset 
    window.pageXOffset // везде, кроме IE8-.

    //На всякий случай – вот самый кросс-браузерный способ, учитывающий IE7- в том числе:
    var html = document.documentElement;
    var body = document.body;

    var scrollTop = html.scrollTop || body && body.scrollTop || 0;
    scrollTop -= html.clientTop; // в IE7- <html> смещён относительно (0,0)

    // Установить прокрутку можно при помощи специальных методов:
    window.scrollTo(pageX,pageY) // абсолютные координаты,
    window.scrollBy(x,y)         // прокрутить относительно текущего места.
    elem.scrollIntoView(top)     // прокрутить, чтобы элемент elem стал виден.

    elem.getBoundingClientRect() // возвращает координаты элемента, под которыми понимаются 
    // размеры «воображаемого прямоугольника», который охватывает весь элемент.
    // Координаты возвращаются в виде объекта со свойствами:
    // top – Y-координата верхней границы элемента,
    // left – X-координата левой границы,
    // right – X-координата правой границы,
    // bottom – Y-координата нижней границы.

    var elem = document.elementFromPoint(x, y); // Возвращает элемент, который находится на 
                                                // координатах (x, y) относительно окна.

// События

    // События мыши:
    // Простые события
    mousedown // Кнопка мыши нажата над элементом.
    mouseup // Кнопка мыши отпущена над элементом.
    mouseover // Мышь появилась над элементом.
    mouseout // Мышь ушла с элемента.
    mouseenter/mouseleave   // похожи на mouseover/mouseout. Они тоже срабатывают, 
                            // когда курсор заходит на элемент и уходит с него, 
                            // но с двумя отличиями. Не учитываются переходы внутри элемента.
                            // События mouseenter/mouseleave не всплывают.
    mousemove // Каждое движение мыши над элементом генерирует это событие.
    // Комплексные события
    click // Вызывается при клике мышью, то есть при mousedown, а затем mouseup на одном элементе
    contextmenu // Вызывается при клике правой кнопкой мыши на элементе.
    dblclick // Вызывается при двойном клике по элементу.

    scroll // происходит, когда элемент прокручивается.

    // События на элементах управления:
    submit // посетитель отправил форму <form>
    focus // посетитель фокусируется на элементе, например нажимает на <input>
    blur // когда фокус исчезает, например посетитель кликает на другом месте экрана.
    change  // происходит по окончании изменении значения элемента формы, 
            //когда это изменение зафиксировано.
    input   // срабатывает тут же при изменении значения текстового элемента и 
            // поддерживается всеми браузерами, кроме IE8-.

    // Клавиатурные события:
    keydown // когда посетитель нажимает клавишу
    keyup // когда посетитель отпускает клавишу
    keypress // возникает сразу после keydown, если нажата символьная клавиша, 
             // т.е. нажатие приводит к появлению символа.

    // События документа:
    DOMContentLoaded // когда HTML загружен и обработан, DOM документа полностью построен и доступен.
    load // браузер загрузил все ресурсы.
    beforeunload/unload // уход со страницы.

    // События CSS:
    transitionend // когда CSS-анимация завершена.

    // Атрибут HTML: 
    onclick="..."
    // Свойство: 
    elem.onclick = function.
    // Специальные методы:
    // Современные: 
    elem.addEventListener( событие, handler[, phase]) 
    elem.removeEventListener( событие, handler) // удаление
    // Для старых IE8-: 
    elem.attachEvent( "on"+событие, handler )
    elem.detachEvent( "on"+событие, handler ) // удаление

    // асинхронность событий через setTimeout(..., 0)
    button.onclick = function() {
        text.value += ' ->в onclick ';

        setTimeout(function() {
            text.focus(); // сработает после onclick
        }, 0);

        text.value += ' из onclick-> ';
    };

    text.onfocus = function() {
        text.value += ' !focus! ';
    };

    // Свойства объекта события
    element.onclick = function(event) {
        event = event || window.event;
    };

    
    event.type  // Тип события, в данном случае click
    event.target    // это исходный элемент, на котором произошло событие, 
                    // в процессе всплытия он неизменен.
    event.currentTarget // Элемент, на котором сработал обработчик. 
                        // Значение – в точности такое же, как и у this, но бывают ситуации, 
                        // когда обработчик является методом объекта и его this при помощи bind привязан
                        // к этому объекту, тогда мы можем использовать event.currentTarget.
    event.eventPhase // на какой фазе он сработал (погружение =1, всплытие = 3).
    event.keyCode // код клавиши
    event.shiftKey // Модификаторы shift, alt, ctrl и meta
    event.altKey
    event.ctrlKey
    event.metaKey // (для Mac)
    event.clientX/event.clientY //содержит координаты курсора относительно текущего окна
    event.pageX/event.pageY // Координаты курсора относительно документа находятся в свойствах 
                            // В IE до версии 9 не поддерживаются свойства pageX/pageY, 
                            // но их можно получить, прибавив к clientX/clientY 
                            // величину прокрутки страницы.
    event.relatedTarget // с какого элемента пришла (или на какой ушла) мышь
                        // Событие mouseover происходит, когда мышь появляется над элементом, 
                        // а mouseout – когда уходит из него.

    event.stopPropagation() // остановки всплытия нужно вызвать метод
    event.stopImmediatePropagation()
    // Для того, чтобы полностью остановить обработку, современные браузеры поддерживают метод. 
    // Он не только предотвращает всплытие, но и останавливает обработку событий на текущем элементе.

    // Для отмены действия браузера по умолчанию существует стандартный метод 
    event.preventDefault().
    // Если же обработчик назначен через onсобытие (не через addEventListener), 
    // то можно просто вернуть false из обработчика.

    elem.dispatchEvent(event) // чтобы инициировать событие, запускается.

    // Мышь колесико
    if (elem.addEventListener) {
        if ('onwheel' in document) {
            // IE9+, FF17+, Ch31+
            elem.addEventListener("wheel", onWheel);
        } else if ('onmousewheel' in document) {
            // устаревший вариант события
            elem.addEventListener("mousewheel", onWheel);
        } else {
            // Firefox < 17
            elem.addEventListener("MozMousePixelScroll", onWheel);
        }
    } else { // IE8-
        elem.attachEvent("onmousewheel", onWheel);
    }

    function onWheel(e) {
      e = e || window.event;

      // wheelDelta не дает возможность узнать количество пикселей
      var delta = e.deltaY || e.detail || e.wheelDelta;

      var info = document.getElementById('delta');

      info.innerHTML = +info.innerHTML + delta;

      e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    }

    // Прокрутка
    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        document.getElementById('showScroll').innerHTML = scrolled + 'px';
    }

    // Чтобы отправить форму на сервер из JavaScript – нужно вызвать на элементе формы метод 
    form.submit().
    // При этом само событие submit не генерируется. Предполагается, 
    // что если программист вызывает метод form.submit(), то он выполнил все проверки.
