// 'use strict';

//! **********  THIS  *****************


//todo  1) обычная функция: this = window , но есть включен 'use strict' = undefined;
//todo  2) контекст у методов объекта - сам объект
//todo  3) this в конструкторах и классах - это новый экземпляр объекта
//todo  3) ручная привязка this: call, apply, bind

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this)
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

function sayName () {
    console.log(this);
    console.log(this.name);
}

const user = {
    name: 'John'
};


//* установили контекст
sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13));


//! *********** функция - конструктор ***********
function User(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} ушел!`);

};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);