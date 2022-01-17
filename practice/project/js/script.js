'use strict';

//todo ******* 1) Удалить все рекламные блоки со страницы (правая часть сайта)
const adv = document.querySelectorAll('.promo__adv img');

function removePromo() {
    adv.forEach(item => {
        item.remove();
    });
}
removePromo();

//todo ******* 2) Изменить жанр фильма, поменять "комедия" на "драма"
const genreMarsian = document.querySelector('.promo__genre');
genreMarsian.textContent = 'драма';

//todo ***** 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". 
//todo ***** Оно лежит в папке img. Реализовать только при помощи JS

const posterMarsian = document.querySelector('.promo__bg');
posterMarsian.style.backgroundImage = 'url("img/bg.jpg")';

//todo ***** 4) Список фильмов на странице сформировать на основании данных 
//todo ***** из этого JS файла. Отсортировать их по алфавиту 


const movieDB = {
    movies: [
        "Логан",
        "Скотт Пилигрим против...",
        "Лига справедливости",
        "Одержимость",
        "Ла-ла лэнд",
    ]
};

const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';

//* добавили сортировку
movieDB.movies.sort();
console.log(movieDB);

movieDB.movies.forEach((film, index) => {
    //todo ****** 5) Добавить нумерацию выведенных фильмов */
    movieList.innerHTML += `
        <li class="promo__interactive-item">${index + 1 + '. ' + film}
            <div class="delete"></div>
        </li>
    `;
});


/* 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */