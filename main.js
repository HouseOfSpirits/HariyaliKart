const contactButton = document.querySelector('#contact');
const contactBtn = document.querySelector('#contactBtn');
const contactForm = document.querySelector('.contact__form');
const menu_btn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

const cursor = document.querySelector('.cursor');

const rightNav = document.querySelector('.right__nav');

window.onload = function () {
  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    nav.classList.toggle('is-active');

    if (menu_btn.classList.includes('is-active')) {
      rightNav.setAttribute('dataManu-opened', true);
    } else {
      rightNav.setAttribute('dataManu-opened', false);
    }
  });

  contactButton.addEventListener('click', function () {
    contactButton.classList.toggle('is-active');
    contactForm.classList.toggle('is-active');
  });

  contactBtn.addEventListener('click', function () {
    contactBtn.classList.toggle('is-active');
    contactForm.classList.toggle('is-active');
  });
};

document.addEventListener('mousemove', (dets) => {
  cursor.style.left = dets.x + 'px';
  cursor.style.top = dets.y + 'px';
});
