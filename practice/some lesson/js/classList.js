'use strict';

//! ClassList и делегирование событий 
const btns = document.querySelectorAll('button');

//* получаем количество классов у кнопок
// console.log(btns[0].classList.length);

//* получаем у кнопки с индексом 1 название класса с индексом 0
console.log(btns[1].classList.item(0));

//* удаляем класс у необходимого элемента
console.log(btns[3].classList.add('heart'));

//* удаляем класс у необходимого элемента
console.log(btns[2].classList.remove('btn'));

//* переключаем наличие класса
console.log(btns[2].classList.toggle('circle'));

//* проверка содержания указанного класса у необходимого элемента
if (btns[3].classList.contains('heart')) {
    console.log('heart');
}

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('heart')) {
    //     btns[1].classList.add('heart');
    // } else {
    //     btns[1].classList.remove('heart');
    // }
    btns[2].classList.toggle('circle');
});

//! делегирование событий 
const wrapperBtns = document.querySelector('.wrap');


//todo *** РАБОТАЕТ С ДИНАМИЧЕСКИ СОЗДАННЫМИ ЭЛЕМЕНТАМИ!!!  ***
wrapperBtns.addEventListener('click', (event) => {
    // if (event.target && event.target.classList.contains('btn-2')) {
    //     console.log('hello')
    // }
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('hello');
    }
});

// //todo НЕ СРАБОТАЕТ С ДИНАМИЧЕСКИ СОЗДАННЫМИ ЭЛЕМЕНТАМИ!!!
// btns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         console.log('Hey');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('btn');
wrapperBtns.append(btn);