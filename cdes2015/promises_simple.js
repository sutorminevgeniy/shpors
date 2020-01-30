function applyForVisa(documents) {
    console.log('Обработка заявления...');

    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > 0.5 ? resolve({}) : reject('В визе отказано нехватка документов')
        }, 2000);
    });

    return promise;
}

function getVisa(visa) {
    console.log('Виза получена');

    // Равнозначные варианты:

    // return visa;

    // return Promise.resolve(visa);

    return new Promise(function(resolve, reject) {
        resolve(visa)
    });
}

function bookHotel(visa) {
    console.log(visa);
    console.log('Бронируем отель');
    return {};
}

function buyTickets(booking) {
    console.log('Покупаем билеты');
    console.log(booking);
}

applyForVisa({})
    .then(getVisa)
    .then(bookHotel)
    .then(buyTickets)
    .catch(error => console.error(error));

