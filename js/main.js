//==================== Menu show Y hidden ======================
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* ======================= menu show =================*/
// validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* ======================= menu hide =================*/
// validate if constant exists

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// =================== REMOVE MENU MOBILE ================
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {

    // when we click on ecah nav__link, we remove the show-menu class, we hide the nav-menu
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


// ==================== SKILLS ======================

const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});


// ============= services Modal =================

const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});


modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});


// ================= portfolio swiper ==============
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// ==================== scroll sections => active links

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');

        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);



// =================== change header shadow ==============
// function scrollHeader() {
//     const nav = document.getElementById("header");
//     // when the scroll is grater than 200 viewport, add the scroll-header class to the header tag
//     if (this.scrollY >= 80) nav.classList.add('scroll-header');
//     else nav.classList.remove('scroll-header');

// }
// window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
    const nav = document.getElementById("header");
    if (this.pageYOffset >= 100) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');

    }
}

window.addEventListener('scroll', scrollHeader);


// ================== dark/light mode
const themeButton = document.getElementById("theme-button");
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// we obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// we validate if the user previously chose a topic
if (selectedTheme) {
    // if the validation is fulfilled, we ask what the issu was to know if we activated or deactivated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// activate / deactivate the theme manually with  the button
themeButton.addEventListener('click', () => {
    // add or remove the dark / icon theme 
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});