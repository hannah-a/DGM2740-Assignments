function openMenu() {
    document.querySelector("#ul").classList.toggle('open')
    document.querySelector("#button").classList.toggle('open')
}
//button for navigation menu
const x = document.querySelector('#button')
x.onclick = openMenu