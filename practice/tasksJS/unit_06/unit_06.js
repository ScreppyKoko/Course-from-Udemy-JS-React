//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочкa рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
   let out = '';
   for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
         out += '*';
      }
      out += '_';
   }
   document.querySelector('.out-1').textContent = out;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифру и перенос строки br, внутренний - *_, и после этого внешний - знак переноса.</p>
function t2() {
   let out = '';
   for (let i = 1; i <= 3; i++) {
      out += i + '<br>';
      for (let j = 0; j < 3; j++) {
         out += '*_';
      }
      out += '<br>';
   }
   document.querySelector('.out-2').innerHTML = out;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_

// <p>Решить задачу с помощью вложенных циклов. Внутренний цикл выводит *_,  внешний цикл выводит перенос строки br.</p>
function t3() {
   let out = '';
   for (let i = 0; i <= 3; i++) {
      for (let j = 0; j < 3; j++) {
         out += '*_';
      }
      out += '<br>';
   }
   document.querySelector('.out-3').innerHTML = out;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1_1*2*3*4*5*2_1*2*3*4*5*3_1*2*3*4*5*
// Внешний цикл выводит цифру и _, а внутренний выводит от 1 до 5 с *
function t4() {
   let out = '';
   for (let i = 1; i <= 3; i++) {
      out += i + '_';
      for (let j = 1; j <= 5; j++) {
         out += j + '*';
      }
   }
   document.querySelector('.out-4').innerHTML = out;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 101010
// 101010
// 101010

// <p>Вложенный цикл в зависимости от четного или нет k (счетчика цикла) рисует или 0 или 1. Внешний цикл - br.</p>
function t5() {
   let out = '';
   for (let i = 0; i < 3; i++) {
      for (let j = 1; j <= 6; j++) {
         if (j % 2 === 0) {
            out += '0';
         } else {
            out += '1';
         }
      }
      out += '<br>';
   }
   document.querySelector('.out-5').innerHTML = out;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 10x01x
// 10x01x
// 10x01x


function t6() {
   let out = '';
   for (let i = 0; i < 3; i++) {
      for (let j = 1; j <= 6; j++) {
         if (j == 1 || j == 5) {
            out += '1';
         } else if (j == 2 || j == 4) {
            out += '0';
         } else {
            out += 'x';
         }
      }
      out += '<br>';
   }
   document.querySelector('.out-6').innerHTML = out;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *
// **
// ***
// ****

function t7() {
   let out = '';
   for (let i = 1; i <= 4; i++) {
      for (let j = 0; j < i; j++) {
         out += '*';
      }
      out += '<br>';
   }
   document.querySelector('.out-7').innerHTML = out;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Per aspera ad astra
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *****
// ****
// ***
// **
// *

function t8() {
   let out = '';
   for (let i = 5; i > 0; i--) {
      for (let j = 0; j < i; j++) {
         out += '*';
      }
      out += '<br>';
   }
   document.querySelector('.out-8').innerHTML = out;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 1_
// 1_2_
// 1_2_3_
// 1_2_3_4_
// 1_2_3_4_5_

function t9() {
   let out = '';
   for (let i = 1; i <= 5; i++) {
      for (let j = 1; j <= i; j++) {
         out += j + '_';
      }
      out += '<br>';
   }
   document.querySelector('.out-9').innerHTML = out;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

//01_02_03_04_05_06_07_08_09_10_
//11_12_13_14_15_16_17_18_19_20_
//21_22_23_24_25_26_27_28_29_30_
//31_32_33_34_35_36_37_38_39_40_
//41_42_43_44_45_46_47_48_49_50_


function t10() {
   let out = '';
   for (let i = 0; i < 5; i++) {
      for (let j = 1; j < 11; j++) {
         if (i == 0 && j < 10) out += '0';
         out += 10 * i + j + '_';
      }
      out += '<br>';
   }
   document.querySelector('.out-10').innerHTML = out;
}

document.querySelector('.b-10').onclick = t10;

//! дополнительные задачи:

// Task 1
// Используя вложенные циклы создайте таблицу умножения от 1 до 10. Т.е. вначале столбец 1x1, 1x2...1x9
// потом 2x1, 2x2 ... 2x9 и так далее. Оформить в виде столбцов где выводятся множители и результат.

let output = document.querySelector('.output');
output.style.backgroundColor = "#ffffff";
output.style.paddingLeft = '10px';

function task1() {
   
   document.querySelector('.output-1').textContent = 1;
}

document.querySelector('.button-1').onclick = task1;

// Task 2
// С помощью вложенных циклов и символа * нарисуйте:

// *****
// *****
// *****



// Task 3
// С помощью вложенных циклов и символа * нарисуйте:

//    *****
//    ****
//    ***
//    **
//    *

// Task 4
// С помощью вложенных циклов и символа * нарисуйте:

//      *****
//     *****
//    *****

// Task 5
// С помощью вложенных циклов и символа * нарисуйте:

//    *
//    **
//    ***
//    **
//    *

// Task 6
	
// С помощью вложенных циклов и символа * нарисуйте:

// 	******
// 	*       *
// 	*       *
// 	*       *
//    ******


// Task 7
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:

// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

// Task 8
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:

//         1
//       2 1
//     3 2 1
//   4 3 2 1
// 5 4 3 2 1

// Task 9
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:

// X X X X 1
// X X X 2 1
// X X 3 2 1
// X 4 3 2 1
// 5 4 3 2 1

// Task 10
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:

//   1
//   2  2
//   3  3  3
//   4  4  4  4
//   5  5  5  5  5

// Task 11
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла (четные заменены на X):

//   5
//   X  X
//   3  3  3
//   X  X  X  X
//   1  1  1  1  1

// Task 12
// С помощью вложенных циклов и символа * нарисуйте:

//      *****
//     *******
//    *********

// Task 13
// С помощью вложенных циклов и символа * нарисуйте:

//      **
//     ****
//    ******
//     ****
//      **


