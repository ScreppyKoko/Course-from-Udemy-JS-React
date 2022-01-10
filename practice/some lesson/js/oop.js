'use strict';

//          _proto_ - устарело и не используется

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello')
    }
};
const john = {
    health: 100
};
//* создаем прототип в динамике
Object.setPrototypeOf(john, soldier);

john.sayHello();

//* создаем новый объект, который будет прототипно наследоваться от 'soldier'
const jimmy = Object.create(soldier);
jimmy.sayHello();
