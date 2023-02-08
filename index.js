let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__link');

const btnMore = document.querySelector('.articles__more');
const articlesItems = document.querySelectorAll('.article__item');

burger.addEventListener('click',

    function () {

        burger.classList.toggle('burger_active');
        menu.classList.toggle('header__nav_active');
        document.body.classList.toggle('stop-scroll');

    })

menuLinks.forEach(function (element) {

    element.addEventListener('click', function () {

        burger.classList.remove('burger_active');
        menu.classList.remove('header__nav_active');
        document.body.classList.remove('stop-scroll');

    })

})

btnMore.addEventListener('click', function () {

    articlesItems.forEach(function (el) {

        el.classList.add('article__item_visible');

    })

    btnMore.closest('.articles__center').classList.add('articles__center_hidden');

})