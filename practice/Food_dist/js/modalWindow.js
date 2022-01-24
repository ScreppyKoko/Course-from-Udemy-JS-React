'use strict';

const modalTrigger = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('[data-close]');

function openModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = '';
    //* без toggle тоже можно
    // modal.classList.add('hide');
    // modal.classList.remove('show');
}

//* перебираем все искомые кнопки и навешиваем слушателя по клику для открытия модального окна
modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
});

//* слушаем и закрываем по клику на кнопку
modalCloseBtn.addEventListener('click', closeModal);

//* слушаем и закрываем по клику на область вне модального окна
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.code === "Escape" && modal.classList.contains('showgit')) {
        closeModal();
    }
})