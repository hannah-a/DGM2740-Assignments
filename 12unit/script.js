const hotelData = '/hotels.json' // change link for big website

fetch(hotelData)
.then((response) => response.json())
.then((myList) => {
    console.log(myList)

    myList.forEach(hotel => {
    //css grid 
    let inventoryWrapper = document.querySelector('.main__inventoryWrapper')
    
    //grid items
    let figureDiv = document.createElement('div')
    figureDiv.className = 'main__figureDiv'

    //Figure items
    let myImageTag = document.createElement('img')
    myImageTag.className = 'main__figureImg'
    myImageTag.src = hotel.photo

    let myCaptionTag = document.createElement('figcaption')
    myCaptionTag.className = 'main__figcaption'
    myCaptionTag.textContent = hotel.name

    let myFigureTag = document.createElement('figure')
    myFigureTag.className = 'main__figure'

    //Contact Items
    let addressPhoneDiv = document.createElement('div')
    addressPhoneDiv.className = 'main__addressPhoneDiv'

    //Address grid div
    let addressIcon = document.createElement('div')
    addressIcon.innerHTML = `<ion-icon name="map"></ion-icon>`
    addressIcon.className = 'main__addressIcon main__icon main__addressItem'

    let phoneIcon = document.createElement('div')
    phoneIcon.innerHTML = `<ion-icon name="call"></ion-icon>`
    phoneIcon.className = 'main__phoneIcon main__icon main__addressItem'

    let address = document.createElement('p')
    address.className = 'main__address main__addressItem'
    address.innerHTML = `${hotel.address[0]} <br> ${hotel.address[1]}`

    let phone = document.createElement('p')
    phone.className = 'main__phone main__addressItem'
    phone.textContent = hotel.phone


    myFigureTag.appendChild(myImageTag)
    myFigureTag.appendChild(myCaptionTag)
    figureDiv.appendChild(myFigureTag)

    addressPhoneDiv.appendChild(addressIcon)
    addressPhoneDiv.appendChild(address)
    addressPhoneDiv.appendChild(phoneIcon)
    addressPhoneDiv.appendChild(phone)

    inventoryWrapper.appendChild(figureDiv)
    figureDiv.appendChild(addressPhoneDiv)

    
    })
})

