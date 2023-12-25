const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.menu__list');
const menuBtnClose = document.querySelector('.menu__btn--close');

menuBtn .addEventListener('click', ()=> {
    menuMobile.classList.toggle('menu--open');
    menuBtn.classList.toggle('menu--open');
})

menuBtnClose .addEventListener('click', ()=> {
    menuBtnClose.classList.toggle('menu--open');
})