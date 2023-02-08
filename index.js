let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__link');

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