const hamburger = document.querySelector('.header__hamburger');
const pageWrapper = document.querySelector('.body__wrapper');
hamburger.addEventListener('click', () => {
  pageWrapper.classList.toggle('open');
})