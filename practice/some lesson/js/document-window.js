'use strict';

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
//* метод getBoundingClientRect - получаем все координаты границ
console.log(boxWindow.getBoundingClientRect()); //* можно узнавать конкретные границы. добавить например .top после вызова метода

//* получаем любые стили элемента (проверять на соотвествие) 
//* в том числе можно работать с псевдоэлементами
const style = window.getComputedStyle(boxWindow);
console.log(style.display);

console.log(document.documentElement.clientWidth)