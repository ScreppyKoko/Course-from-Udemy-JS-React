'use strict';

//* task_1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''),
   a = prompt('Один из последних просмотренных фильмов?', ''),
   b = +prompt('На сколько оцените его?', ''),
   c = prompt('Один из последних просмотренных фильмов?', ''),
   d = +prompt('На сколько оцените его?', '');

console.log(numberOfFilms);

//* task_2 
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: {},
   privat: false,
};
console.log(personalMovieDB);

//* task_3
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB.movies);

const num = 50;
switch (num) {
   case 51: console.log('Не верно');
      break;
}