'use strict';

//! Practice #1 начинаем создавать приложение! (работа с объектами и запросы к пользователю)
//todo TASK_1 Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
//* 'Сколько фильмов вы уже посмотрели?'
// let numberOfFilms;

// function start() {
//    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//    console.log(numberOfFilms);

//    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//       numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//    }
// }

// start();

//todo TASK_2 Создать объект personalMovieDB и в него поместить такие свойства:
//* - count - сюда передается ответ на первый вопрос
//* - movies - в это свойство поместить пустой объект
//* - actors - тоже поместить пустой объект
//* - genres - сюда поместить пустой массив
//* - privat - в это свойство поместить boolean(логическое) значение false

// const personalMovieDB = {
//    count: 0,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false,
// };

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
// function rememberMyFilms() {
//    for (let i = 0; i < 2; i++) {
//       const a = prompt('Один из последних просмотренных фильмов?', '');
//       const b = +prompt('На сколько оцените его?', '');

//       //todo TASK_2. Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
//       //* отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
//       //* возвращаем пользователя к вопросам опять
//       if (a != null && b != null & a != '' && b != '' && a.length < 50) {
//          personalMovieDB.movies[a] = b;
//          console.log('done');
//       } else {
//          console.log('error');
//          i--;
//       }
//    }
// }

// rememberMyFilms();

//todo TASK_3. При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
//* "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
//* "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// function detectPersonalLevel() {
//    if (personalMovieDB.count < 10) {
//       console.log('Просмотрено довольно мало фильмов');
//    }
//    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       console.log('Вы классический зритель');
//    }
//    else if (personalMovieDB.count >= 30) {
//       console.log('Вы киноман!');
//    } else {
//       console.log('Произошла ошибка!');
//    }
// }
// detectPersonalLevel();

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

//todo TASK_1. Первую часть задания повторить по уроку
//* вывел в отдельные функции условия, цикл.

//todo TASK_2. Создать функцию showMyDB, которая будет проверять свойство privat.
// Если стоит в позиции false - выводит в консоль главный объект программы
// function showMyDB(hidden) { //* мое решение было без аргумента =(
//    if (!hidden) {
//       console.log(personalMovieDB);
//    }
// }
// showMyDB(personalMovieDB.privat);

//todo TASK_3.  Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос:
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных genres
// function writeYourGenres() {
//    for (let i = 1; i <= 3; i++) {
//       personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//       //* мое решение(не очень):
//       // const checkLikedGenres = prompt(`Ваш любимый жанр под номером ${i}`);
//       // personalMovieDB.genres.push(checkLikedGenres);
//    }
// }
// writeYourGenres();


/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function () {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      console.log(personalMovieDB);
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      }
   },
   rememberMyFilms: function () {
      for (let i = 0; i < 2; i++) {
         const a = prompt('Один из последних просмотренных фильмов?', '');
         const b = +prompt('На сколько оцените его?', '');
         if (a != null && b != null & a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
         } else {
            console.log('error');
            i--;
         }
      }
   },
   detectPersonalLevel: function () {
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
   },
   showMyDB: function (hidden) {
      if (!hidden) {
         console.log(personalMovieDB);
      }
   },
   toggleVisibleMyDB: function () {
      if (this.privat) {
         this.privat = false;
      } else {
         this.privat = true;
      }
   },
   writeYourGenres: function () {
      for (let i = 1; i <= 3; i++) {

         //* Альтернативный вариант из урока
         // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
         // if (genres === '' || genres == null) {
         //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
         //     i--;
         // } else {
         //     personalMovieDB.genres = genres.split(', ');
         //     personalMovieDB.genres.sort();
         // } 

         let genre = prompt(`Ваш любимый жанр под номером ${i}`);
         if (genre === '' || genre == null) {
            console.log('Вы ввели неккорректные данные или ничё не ввели');
            i--;
         } else {
            personalMovieDB.genres[i - 1] = genre;
         }
      }
      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Любимый жанр ${i + 1} - это ${item}`);
      });
   },
};
