'use strict';

//! Practice #1 начинаем создавать приложение! (работа с объектами и запросы к пользователю)
//todo TASK_1 Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
//* 'Сколько фильмов вы уже посмотрели?'
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = +prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = +prompt('На сколько оцените его?', '');

console.log(numberOfFilms);

//todo TASK_2 Создать объект personalMovieDB и в него поместить такие свойства:
//* - count - сюда передается ответ на первый вопрос
//* - movies - в это свойство поместить пустой объект
//* - actors - тоже поместить пустой объект
//* - genres - сюда поместить пустой массив
//* - privat - в это свойство поместить boolean(логическое) значение false

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

console.log(personalMovieDB);

//todo TASK_3 Задайте пользователю по два раза вопросы:
//*     - 'Один из последних просмотренных фильмов?'
//*     - 'На сколько оцените его?'
//* Ответы стоит поместить в отдельные переменные
//* Записать ответы в объект movies в формате: 
//*     movies: {
//*         'logan': '8.1'
//*     }

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB.movies);

//! Practice #2 (Применяем условия и циклы )

//todo TASK_1. Автоматизировать вопросы пользователю про фильмы при помощи цикла
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '');
    const b = +prompt('На сколько оцените его?', '');

    //todo TASK_2. Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
    //* отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
    //* возвращаем пользователя к вопросам опять
    if (a != null && b != null & a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
console.log(personalMovieDB);

//todo TASK_3. При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
//* "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
//* "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
}
else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
}
else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман!');
} else {
    console.log('Произошла ошибка!');
}

//todo TASK_4. Потренироваться и переписать цикл еще двумя способами
//* (переписать циклы с помощью while / do while)
//// ? переписал с помощью === while ===
// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = +prompt('На сколько оцените его?', '');
//     i++;
//     if (a != null && b != null & a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }
// console.log(personalMovieDB)

////? переписал с помощью === do while ===
// let i = 0;
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = +prompt('На сколько оцените его?', '');
//     i++;
//     if (a != null && b != null & a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// } while (i < 2);
// console.log(personalMovieDB);

//! Practice #3 ( Используем функции )
