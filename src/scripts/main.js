// Biblioteca de animação

AOS.init();

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const sobreSection = document.querySelector('.sobre');
    let lastScrollY = window.scrollY;
    const menuButton = document.querySelector('.header__responsive__menu');
    const menu = document.querySelector('.header__list');
    const video = document.querySelector('.video');
    const videoItem = document.querySelector('.video__item');
    const videoText = document.querySelector('.video__text');
    const links = document.querySelectorAll('.header__list__content__item__link');

 // Contador do evento

const dataDoEvento = new Date("Nov 14, 2024 16:00:00");
const timeStampEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
const agora = new Date();
const timeStampAtual = agora.getTime();

const distanciaAteOEvento = timeStampEvento - timeStampAtual;

const diasAteOEvento = Math.floor(distanciaAteOEvento / (1000*60*60*24));
const horasAteOEvento = Math.floor((distanciaAteOEvento % (1000*60*60*24)) / (1000 * 60 * 60));
const minutosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60)) / (1000 * 60));
const segundosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60)) / 1000);

document.getElementById('timer').innerHTML = ` ${diasAteOEvento}d  ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

if(distanciaAteOEvento < 0){
    clearInterval(contaAsHoras);
    document.getElementById('timer').innerHTML = 'Evento finalizado'
}
}, 1000);

    // Transição suave

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href');
            const section = document.querySelector(sectionId);
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Funcionalidade do Video

    video.addEventListener('click', function () {
        video.classList.toggle('video--active');
        videoItem.classList.toggle('video__item--active');
        videoText.classList.toggle('video__text--active');
    });

    // Funcionalidade do menu responsivo

    menuButton.addEventListener('click', function () {
        menu.classList.toggle('header__list--active');
    });

    // Funcionalidade do header

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