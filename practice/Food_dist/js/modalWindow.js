'use strict';

const modalTrigger = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('[data-close]');

function openModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
}

function closeModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = '';
    //* без toggle тоже можно
    // modal.classList.add('hide');
    // modal.classList.remove('show');
}

function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
    }
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

//* даём возможность пользователю закрывать  окно клавишей "Escape"
document.addEventListener('keydown', (event) => {
    if (event.code === "Escape" && modal.classList.contains('showgit')) {
        closeModal();
    }
});

//* открываем модальное окно через 20 секунд 
// const modalTimerId = setTimeout(openModal, 20000);


//* открываем модальное окно при скролле до конца
window.addEventListener('scroll', showModalByScroll); 