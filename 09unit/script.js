const ul = document.querySelector('.ul')
const ul__exploreUl = document.querySelector('.ul__exploreUl')
const hamburgerButton = document.querySelector('.nav__hamburger')

hamburgerButton.addEventListener('click', () => {
    ul.classList.toggle('ul--open')
})
