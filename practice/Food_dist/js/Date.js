'use strict';
//! рабочий код для страницы 

const deadLine = '2022-01-21';

function getTimeRamaining(endtime) {
    const time = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor((time / (1000 * 60 * 60 * 24))),
        hours = Math.floor((time / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((time / 1000 / 60) % 60),
        seconds = Math.floor((time / 1000) % 60);
    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getZero (num) {
    if (num >= 0 && num < 10)     {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

        updateClock();

    function updateClock() {
        const time = getTimeRamaining(endtime);
        days.innerHTML = getZero(time.days);
        hours.innerHTML = getZero(time.hours);
        minutes.innerHTML = getZero(time.minutes);
        seconds.innerHTML = getZero(time.seconds);
        if (time.total <= 0) {
            clearInterval(timeInterval);
        }
    }
    
}

setClock('.timer', deadLine);


//! учебный код , тестил
// const now = new Date();
// new Date.parse('2022-01-19'); //! не работает
// //* методы сеттеры
// console.log(now.setHours(18, 40));
// console.log(now);



// //* методы геттеры
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getUTCHours());
// console.log(now.getHours());
// console.log(now.getTime());

// let start = new Date();

// for (let i = 0; i < 3000000; i++) {
//     let some = 1**3;
// }
// let end = new Date();

// alert(`Цикл отработал за ${end - start} ms`)
