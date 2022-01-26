'use strict';

/*
const boxWindow = document.querySelector('.box-window');
const btnWindow = document.querySelector('.btn-window');

//* узнаем ширину/высоту элемента без учета margin, рамок, ширины скролла (но учитывая padding)
const width = boxWindow.clientWidth;
const height = boxWindow.clientHeight;

//* узнаем ширину/высоту элемента учитывая все границы
const width2 = boxWindow.offsetWidth;
const height2 = boxWindow.offsetHeight;

//* аналогично clientWidth/clientHeight , но считаем всю ширину/длинну даже за скроллом
const width3 = boxWindow.scrollWidth;
const height3 = boxWindow.scrollHeight;

console.log(width, height);
console.log(width2, height2);
console.log(width3, height3);

//* по клику разворачиваем блок на всю высоту экрана, без скролла в блоке (скролл общий останется)
btnWindow.addEventListener('click', () => {
    boxWindow.style.height = boxWindow.scrollHeight + 'px';
});


//! в JS в отличие от CSS все координаты границы считаются с правого верхнего края
//todo метод getBoundingClientRect - получаем все координаты границ
//* можно узнавать конкретные границы. добавить например .top после вызова метода

console.log(boxWindow.getBoundingClientRect());

//* получаем любые стили элемента (проверять на соотвествие) 
//* в том числе можно работать с псевдоэлементами
const style = window.getComputedStyle(boxWindow);
console.log(style.display);

console.log(document.documentElement.clientWidth);

*/

// Алфавит
let symbols = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', '.', ',', '—', '!'];

// Закодированное сообщение
let encodedSymbols = [18, 38, 46, 62, 66, 50, 33, 41, 66, 49, 48, 38, 58, 62, 68, 66, 48, 37, 42, 47, 66, 50, 33, 41, 66, 49, 48, 51, 49, 42, 67];

// Раскодированное сообщение
let decodedMessage = '';

for (let i = 0; i < encodedSymbols.length - 1; i++) {
    decodedMessage += symbols[encodedSymbols[i]];
    console.log(decodedMessage);
}
console.log(decodedMessage);