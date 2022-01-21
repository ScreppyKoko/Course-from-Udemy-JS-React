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

//todo ****** сортировка при желании
const sortArr = (arr) => {
   arr.sort();
};

let summative = 0;
function getPlus() {
   for (let i = 0; i < payablesObj.sum.length; i++) {
      summative += payablesObj.sum[i];
   }
}

function createPayablesList() {
   payablesList.innerHTML = '';
   getPlus();
   payablesObj.sum.forEach(sum => {
      payablesList.innerHTML += `
      <li class="payables__list-item">${sum}</li>
      `;
   });
   payablesSumTotal.textContent = summative + ' рублей';
}
createPayablesList();

payablesForm.addEventListener('submit', (event) => {
   event.preventDefault();

   let newPayDate = payablesDate.value;
   let newPaySum = payablesSum.value;

   payablesObj.date.push(newPayDate);
   payablesObj.sum.push(+newPaySum);
   console.log(payablesObj);
   getPlus();
   createPayablesList();
});

