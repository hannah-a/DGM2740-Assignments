//function to make button open and close navigation menu
function openMenu() {
    document.querySelector("#ul").classList.toggle('open')
    document.querySelector('.button').classList.toggle('closed')
}
//button for navigation menu
const x = document.querySelector('.button')
x.onclick = openMenu