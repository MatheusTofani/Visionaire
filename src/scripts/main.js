document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const sobreSection = document.querySelector('.sobre');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function () {
        const currentScrollY = window.scrollY;
        const sobreTop = sobreSection.getBoundingClientRect().top;

        // Verifica se estamos na seção 'sobre' e rolando para baixo
        if (currentScrollY > lastScrollY && sobreTop <= 0) {
            header.classList.add('header__active');
        } 

        else if (currentScrollY < lastScrollY || sobreTop > 0) {
            header.classList.remove('header__active');
        }

        
        lastScrollY = currentScrollY;
    });
});
