'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const adv = document.querySelectorAll('.promo__adv img');
    const movieList = document.querySelector('.promo__interactive-list');
    const genreMarsian = document.querySelector('.promo__genre');
    const posterMarsian = document.querySelector('.promo__bg');
    const addForm = document.querySelector('form.add');
    const inpFilm = addForm.querySelector('.adding__input');
    const btnConfirm = addForm.querySelector('.confirm-button');
    const checkboxYes = addForm.querySelector('.checkbox');


    const movieDB = {
        movies: [
            "Логан",
            "Скотт Пилигрим против...",
            "Лига справедливости",
            "Одержимость",
            "Ла-ла лэнд",
        ]
    };


    //todo ******* 1) Удалить все рекламные блоки со страницы (правая часть сайта)
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };


    //todo ******* 2) Изменить жанр фильма, поменять "комедия" на "драма"
    //todo ***** 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". 
    //todo ***** Оно лежит в папке img. Реализовать только при помощи JS

    const makeChanges = () => {
        genreMarsian.textContent = 'драма';
        posterMarsian.style.backgroundImage = 'url("img/bg.jpg")';
    };


    //todo ***** 4) Список фильмов на странице сформировать на основании данных 
    //todo ***** из этого JS файла. Отсортировать их по алфавиту 

    //* добавили сортировку
    const sortArr = (arr) => {
        arr.sort();
    };


    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);
        films.forEach((film, index) => {
            //todo ****** 5) Добавить нумерацию выведенных фильмов */
            parent.innerHTML += `
            <li class="promo__interactive-item">${index + 1 + '. ' + film}
                <div class="delete"></div>
            </li>
        `;
        });
        //todo 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
        const wasteBasket = document.querySelectorAll('.delete').forEach((btn, index) => {
            btn.addEventListener('click', (e) => {
                btn.parentElement.remove();
                movieDB.movies.splice(index, 1);
                createMovieList(films, parent);
            });
        });
    }

    //todo 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    //todo "Добавляем любимый фильм"
    function сheckedBestFilm() {
        if (checkboxYes.checked) {
            console.log("Добавляем любимый фильм");
        }
        return;
    }

    //todo **** Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    //todo **** новый фильм добавляется в список. Страница не должна перезагружаться.
    //todo **** Новый фильм должен добавляться в movieDB.movies.
    //todo **** Для получения доступа к значению input - обращаемся к нему как input.value;
    //todo **** P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = inpFilm.value;
        сheckedBestFilm();
        if (newFilm) {
            if (newFilm.length >= 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            movieDB.movies.push(newFilm.toUpperCase());
            //todo 5) Фильмы должны быть отсортированы по алфавиту
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
            console.log(movieDB.movies);
            //todo ***** 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
        } else {
            console.error('Введите данные');
        }
        event.target.reset();
    });

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});