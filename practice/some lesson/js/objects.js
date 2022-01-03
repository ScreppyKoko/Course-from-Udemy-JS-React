'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () { //* создаем метод объекта
        console.log('Test');
    }
};

options.makeTest();

const { border, bg } = options.colors; //* деструктуризация
console.log(bg);

for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение  ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение  ${options[key]}`);

    }
}

//* подсчитываем сколько ключей у объекта
console.log(Object.keys(options).length);


let option = {
    title: "Меню",
};
let { width: w = 100, height: h = 200, title } = option;

console.log(w);
console.log(h);
console.log(title);

//todo ******* Таски из https://learn.javascript.ru/object#the-for-in-loop ******

//* Task 1!

let user = {};
user.name = 'Johh';
user.surname = 'Smith';
user.name = 'Pete';
delete user.surname;
console.log(user);

//* Task 2! Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(obj) {
    for (let key in obj) {
        console.log('чё-то есть');
        return false;

    }
    console.log('голяки');
    return true;

}
isEmpty(user);

//* Task 3! Сумма свойств объекта
//* Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
//* Если объект salaries пуст, то результат должен быть 0.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

//* Task 4! Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2; 
            console.log(obj[key]);
        }
    }
}
multiplyNumeric(menu);