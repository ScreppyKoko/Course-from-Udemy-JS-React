'use strict';

const payablesForm = document.querySelector('.payables__form');
const payablesDate = document.querySelector('.payables__date-input');
const payablesSum = document.querySelector('.payables__sum-input');
const payablesSumTotal = document.querySelector('.payables__result-sum');
const payablesList = document.querySelector('.payables__list');

const payablesObj = {
   date: ['2022-12-30', '2022-01-11', '2022-01-13', '2022-01-21'],
   sum: [3045, 656, 666, 7863]
};

let newObj = Object.assign(...payablesObj.date.map((n, i) => ({ [n]: payablesObj.sum[i] })));
let newObj2 = Object.entries(newObj);
console.log(newObj);


//todo ****** сортировка при желании
const sortArr = (arr) => {
   arr.sort();
};

function getPlus() {
   let summative = 0;
   for (let i = 0; i < payablesObj.sum.length; i++) {
      summative += payablesObj.sum[i];
   }
   payablesSumTotal.textContent = summative + ' рублей';
}

function createPayablesList() {
   payablesList.innerHTML = '';
   payablesObj.date.forEach(date => {
      payablesList.innerHTML += `
      <li class="payables__list-item">${Object.entries(newObj)}</li>
      `;
   });
   getPlus();
   sortArr(payablesObj.date);
}
createPayablesList();

payablesForm.addEventListener('submit', (event) => {
   event.preventDefault();

   let newPayDate = payablesDate.value;
   let newPaySum = payablesSum.value;

   payablesObj.date.push(newPayDate);
   payablesObj.sum.push(+newPaySum);
   createPayablesList();
});
