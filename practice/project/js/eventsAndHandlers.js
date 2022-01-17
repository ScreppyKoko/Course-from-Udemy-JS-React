'use strict';

const btn = document.querySelectorAll('.promo__menu-item');

btn.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
        console.log(e.target);
        console.log('Наведение на ' + item.textContent);

    });
});

//! большой минус этого способа - можно перезатерать события 
// btn.forEach(item => {
//     item.onclick = function () {
//         alert('Click DOM');
//     };
// });

//! рекомендуется использовать этот способ



let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    console.log('ОДИН КЛИК')
    // e.target.remove();
    // i++;
    // if (i == 1) {
    //     btn.forEach((item) => {
    //         item.removeEventListener('click', deleteElement)
    //     });
    // }
};

btn.forEach((item) => {
    item.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelectorAll('a');

link.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
    });
});

