'use strict';

const now = new Date();
// new Date.parse('2022-01-19'); //! не работает 
//* методы сеттеры
console.log(now.setHours(18, 40));
console.log(now);



//* методы геттеры
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getUTCHours());
// console.log(now.getHours());
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 3000000; i++) {
    let some = 1**3;
}
let end = new Date();

alert(`Цикл отработал за ${end - start} ms`)