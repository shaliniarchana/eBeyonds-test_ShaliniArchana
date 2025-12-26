// Hamburger Menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-menu');

if (toggle) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Swiper
new Swiper('.testimonials', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


