'use strict';

//          _proto_ - устарело и не используется

const soldier = {
    health: 400,
    armor: 100,
    dick: 15,
    hands: 2,
    sayHello: function() {
        console.log('Hello');  
    }
};
console.log(soldier);
const john = {
    health: 100
};
//* создаем прототип в динамике (установить прототип)
Object.setPrototypeOf(john, soldier);
console.log(john.dick);
john.sayHello();

//* получаем прототип
Object.getPrototypeOf(john, soldier);
console.log(john.hands);

//* создаем новый объект (прототип), который будет прототипно наследоваться от 'soldier'
const jimmy = Object.create(soldier);
jimmy.sayHello();
console.log(jimmy.armor);