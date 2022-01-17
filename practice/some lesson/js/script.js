'use strict';

const box = document.querySelectorAll('.box');
const circles = document.getElementsByClassName('circle');
const button = document.getElementsByTagName('button');//![1] можно задать с индексом в конце 
const buttons = document.querySelectorAll('.button');
const hearts = document.querySelectorAll('.heart');
const wrapper = document.querySelector('.wrapper');

//* задаем сразу несколько стилей выбранному по индексу элементу
circles[1].style.cssText = 'background-color: lime; transform: scale(1.3)';

//* меняем цвета кнопок с помощью цикла for (не рекомендуется использовать)
for (let i = 0; i < button.length; i++) {
   button[i].style.backgroundColor = 'gray';
}
button[0].style.backgroundColor = 'blue';
button[1].style.borderRadius = '100%';

//* перебираем массив и задаем стиль каждому элементу 
hearts.forEach(item => {
   item.style.backgroundColor = 'blue';
});

//*  добавляем элементы на страницу
const text = document.createTextNode('Тут был я'); //* не рекомендуется использовать
const div1 = document.createElement('div');

div1.classList.add('black');
hearts[1].after(div1);
div1.innerHTML = '<h1>Hey!</h1>'; //! не безопасно для форм или где работает пользователь
div1.insertAdjacentHTML('beforeend', '<h2>Privet</h2>')

const par = document.createElement('p');
par.style.backgroundColor = 'line';
hearts[0].before(par); //! не получилось!!!
console.log(par);
wrapper.append(par); //! не получилось!!!

button[2].replaceWith(circles[0]); //* меняем элемент на странице


