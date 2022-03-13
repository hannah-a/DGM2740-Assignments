const ul = document.querySelector('.nav__ul')

const buttonDiv = document.querySelector('.nav__button')
const hamburgerDiv = document.querySelector('.nav__hamburger')
const exit = document.querySelector('.nav__exit')

buttonDiv.addEventListener('click', () => {
    ul.classList.toggle("nav__button--open")
    hamburgerDiv.classList.toggle("nav__hamburger--closed")
    exit.classList.toggle("nav__exit--open")
})
