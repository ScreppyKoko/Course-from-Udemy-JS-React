'use strict';

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () { //* создаем метод объекта
//         console.log('Test');
//     }
// };
//
// options.makeTest();
//
// const { border, bg } = options.colors; //* деструктуризация
// console.log(bg);
//
// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение  ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение  ${options[key]}`);
//
//     }
// }
//
// //* подсчитываем сколько ключей у объекта
// console.log(Object.keys(options).length);
//
//
// let option = {
//     title: "Меню",
// };
// let { width: w = 100, height: h = 200, title } = option;
//
// console.log(w);
// console.log(h);
// console.log(title);
//
// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy [key] = mainObj [key];
//     }
//     return objCopy;
// }
//
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
//
// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10;
// console.log(newNumbers);
// console.log(numbers);
//
// const add = {
//     d: 17,
//     e: 20
// };
// //* создаем новый объект складывая вабранные (изменения только поверхностно можно
// //* сделать, объет внутри объекта изменить таким способом не удастся)
// const clone = Object.assign({}, add, numbers);
// clone.d = 20;
// clone.c.x = 55;
// console.log(add);
// console.log(clone);
//
//
// //todo ******* Таски из https://learn.javascript.ru/object#the-for-in-loop ******
//
// //* Task 1!
//
// let user = {};
// user.name = 'Johh';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.surname;
// console.log(user);
//
// //* Task 2! Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
//
// function isEmpty(obj) {
//     for (let key in obj) {
//         console.log('чё-то есть');
//         return false;
//
//     }
//     console.log('голяки');
//     return true;
//
// }
// isEmpty(user);
//
// //* Task 3! Сумма свойств объекта
// //* Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// //* Если объект salaries пуст, то результат должен быть 0.
//
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
//
// let sum = 0;
//
// for (let key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum);
//
// //* Task 4! Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == "number") {
//             obj[key] *= 2;
//             console.log(obj[key]);
//         }
//     }
// }
// multiplyNumeric(menu);


// const obj = {
//     cat: 'zohan',
//     wife: 'sveta',
//     job: 'web-developer',
//     status: 'merried',
//     transport: {
//         car: 'peugeout',
//         bike: 'stels'
//     }
// }
//
// console.log(Object.keys(obj).length)
// console.log(Object.values(obj))
// console.log(Object.entries(obj.transport))
//
// const {car, bike} = obj.transport;
// console.log(car)
// console.log(bike)


// Место для второй задачи
// function getCoupeNumber(num) {
//     const place = 36;
//     if(typeof num !== 'number' || !Number.isInteger(num) || num < 0)
//         return "Ошибка. Проверьте правильность введенного номера места";
//     if (num === 0 || num > place)
//         return "Таких мест в вагоне не существует";
//     for(let i = 4; i <= place; i += 4)
//         if (num <= i)  return console.log(Math.ceil(i / 4))
// }
// getCoupeNumber(34)

// Место для первой задачи
function getTimeFromMinutes(num) {
    if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
        return console.log('Ошибка, проверьте данные')
    }
    const hour = Math.floor(num / 60);
    const minutes = num % 60;
    const hoursStr = declOfNum(hour, ["час", "часа", "часов"])
    return console.log(`Это ${hour} ${hoursStr} и ${minutes} минут`)
}
getTimeFromMinutes(2220)

function declOfNum(n, text_forms) {
    n = Math.abs(n) % 100;
    let n1 = n % 100;
    if (n > 10 && n < 20) return text_forms[2];
    if (n1 > 1 && n1 < 5)  return text_forms[1];
    if (n1 === 1)  return text_forms[0];
    return text_forms[2];
}
