'use strict';

const arr = [1, 22, 13, 2, 8];
arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}
console.log(arr);

//* удаляем последний элемент массива
// arr.pop(); 

//* добавляем последний элемент массива
// arr.push(111); 

//* получаем данные от пользователя (запишутся в строку)
// const str = prompt('', '');

//* преобразуем строку в массив по заданному разделителю
// const products = str.split(', ');

//* преобразует массив в строку с заданным разделителем
// console.log(products.join('; '));

//* сортирует массив на месте меняя в нём порядок элементов, может брать в себя функция для настройки сортироки 
// products.sort();


//* узнаем количество элементов в массива (работает по принципу: index + 1)
console.log(arr.length);

//* перебор значений массива с помощью обычного цикла for 
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//* перебор значений массива с помощью спец цикла for of (используется только для массивов!)
//* плюсом является возможность применения break или continue
for (let value of arr) {
    console.log(value);
}

//* метод для перебора массива, используется в большинстве случаев при работе с массивами
//* принимает три аргумента и колбэк функцию
arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'dfqwdqwdqwd';
console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
        blogs = ['wordpress', 'blogger', 'livejournal' ],
        internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(video);
console.log(blogs);
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);

const array = ['a', 'b'];
const newArr = [...array];

const q = {
    one: 1,
    two: 2,
    three: {
        four: 4,
        five: 5
    }
};

const newObj = {...q};
newObj.three.four = 99;
console.log(q);
console.log(newObj);
