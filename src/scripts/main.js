document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const sobreSection = document.querySelector('.sobre');
    let lastScrollY = window.scrollY;
    const menuButton = document.querySelector('.header__responsive__menu');
    const menu = document.querySelector('.header__list');

    menuButton.addEventListener('click', function () {
        menu.classList.toggle('header__list--active');
    });

    window.addEventListener('scroll', function () {
        const currentScrollY = window.scrollY;
        const sobreTop = sobreSection.getBoundingClientRect().top;

        if (currentScrollY > lastScrollY && sobreTop <= 0) {
            header.classList.add('header__active');
        }
        else if (currentScrollY < lastScrollY || sobreTop > 0) {
            header.classList.remove('header__active');
            menu.classList.remove('header__list--active');
        }

        lastScrollY = currentScrollY;
    });
});