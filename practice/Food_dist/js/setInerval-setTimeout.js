'use strict';

const pepper = document.querySelector('.pepper2');
let timer,
    i = 0;

function pepperAnimation() {
    let position = 0;
    const id = setInterval(frame, 1);

    function frame() {
        if (position == 300) {
            clearInterval(id);
        } else {
            position++;
            pepper.style.bottom = position + 'px';
        }
    }
}

pepper.addEventListener('click', pepperAnimation);


// const timerId = setTimeout((text) => {
//     console.log(text);
// }, 2000, 'Hello');

// //* пример №1
// const timerId = setInterval(logger, 1000);
// const btnBlack = document.querySelector('.btn_dark');

// function clearInt(item) {
//     item.addEventListener('click', (event) => {
//         if (event) {
//             clearInterval(timerId);
//         }
//     });
// }
// clearInt(btnBlack);

// function logger() {
//     console.log('task1');
// }


// //* пример №2
// const btnWhite = document.querySelector('.btn_white');
// let timerId2,
//     i = 0;

// btnWhite.addEventListener('click', () => {
//     timerId2 = setInterval(logger2, 500);
// });

// function logger2() {
//     if (i === 4) {
//         clearInterval(timerId2);
//     }
//     console.log('task2');
//     i++;
// }

// //* пример №3
// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);