/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const scr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
scr.reveal('.home__title', {});
scr.reveal('.button', { delay: 200 });
scr.reveal('.home__img', { delay: 400 });
scr.reveal('.home__social-icon', { interval: 200 });

/*SCROLL ABOUT*/
scr.reveal('.about__img', {});
scr.reveal('.about__subtitle', { delay: 400 });
scr.reveal('.about__text', { delay: 400 });

/*SCROLL SKILLS*/
scr.reveal('.skills__subtitle', {});
scr.reveal('.skills__text', {});
scr.reveal('.skills__data', { interval: 200 });
scr.reveal('.skills__img', { delay: 600 });

/*SCROLL CONTACT*/
scr.reveal('.contact__input', { interval: 200 });
