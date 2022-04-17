const buttons = document.querySelector('.nav__buttons')
const ul = document.querySelector('.nav__mainUl')
buttons.addEventListener('click', () => {
    document.querySelector('.nav__buttonHamburger').classList.toggle('closed')
    document.querySelector('.nav__buttonX').classList.toggle('open')

    document.querySelector('.nav__mainUl').classList.toggle('open__ul')
})