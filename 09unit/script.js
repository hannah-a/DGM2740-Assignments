//References to main navigation
const ul = document.querySelector('.ul')
const hamburgerButton = document.querySelector('.nav__button')

//References to sub navigation
const ulexplore = document.querySelector('.ul__exploreUl')
const exploreButton = document.querySelector('.ul__exploreIcon')

//Main nav expanding
hamburgerButton.addEventListener('click', () => {
    ul.classList.toggle('ul--closed')
})

//Sub nav expanding
exploreButton.addEventListener('click', ()=> {
    ulexplore.classList.toggle('ul__exploreUl--closed')
})
