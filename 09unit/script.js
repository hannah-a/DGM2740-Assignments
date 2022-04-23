//References to main navigation
const ul = document.querySelector('.ul')
const hamburgerButton = document.querySelector('.nav__button')

//References to sub navigation
const ulexplore = document.querySelector('.ul__exploreUl')
const exploreButton = document.querySelector('.ul__exploreLi')

//Main nav expanding
hamburgerButton.addEventListener('click', (e) => {
    ul.classList.toggle('ul--open')
    e.stopProgation()
})

//Sub nav expanding

exploreButton.addEventListener('mouseover', (e) => {
    ulexplore.classList.add('explore--open')
    e.stopProgation()
})
exploreButton.addEventListener('mouseout', (e) => {
    ulexplore.classList.remove('explore--open')
    e.stopProgation()
})