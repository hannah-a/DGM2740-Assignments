const hotelData = '/hotels.json' // change link for big website

fetch(hotelData)
.then((response) => response.json())
.then((myList) => {
    console.log(myList)

    myList.forEach(hotel => {

    let myImageTag = document.createElement('img')
    myImageTag.src = hotel.photo

    let myCaptionTag = document.createElement('figcaption')
    myCaptionTag.textContent = hotel.name

    let myFigureTag = document.createElement('figure')
    myFigureTag.appendChild(myImageTag)
    myFigureTag.appendChild(myCaptionTag)
    document.querySelector('.inventoryWrapper').appendChild(myFigureTag)

    myFigureTag.className = 'main__figure'
    })
})

