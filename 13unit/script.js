const url = '//api.openweathermap.org/data/2.5/forecast?lat=47.606209&lon=-122.332069&appid=c4d5fe1255150b5f238ad76372b8dc6b&units=imperial'

async function getWeatherData() {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

let weatherData = {}

getWeatherData().then(data => {
    weatherData = data

    let list = weatherData.list
    
    for(i = 0; i<list.length; i++) {
        let time = list[i].dt_txt
        if(time.includes('18:00:00')) {
            const unixCode = weatherData.list[0].dt * 1000
            const date = new Date(unixCode)
            const longDate = date.toLocaleString('en-US', {weekday: 'long'})
            const mainDiv = document.querySelector('#main__weatherDiv')

            const dayDiv = document.createElement('div')
            dayDiv.className = 'main__weatherItem'
            
            const dayTitle = document.createElement('div')
            dayTitle.className = 'main__weatherTitle'
            dayTitle.textContent = longDate

            const dayWeather = document.createElement('div')
            dayWeather.className = 'main__weatherInfo'
            dayWeather.textContent = list[i].weather[0].description

            const temp = document.createElement('span')
            temp.className = 'main__weatherTemp'
            temp.innerHTML = `${list[i].main.temp} &#xb0;F`

            const icon = document.createElement('img')
            icon.className = 'main__weatherIcon'
            icon.src = `//openweathermap.org/img/w/${list[i].weather[0].icon}.png`
            
            mainDiv.appendChild(dayDiv)
            dayDiv.appendChild(dayTitle)
            dayDiv.appendChild(dayWeather)
            dayDiv.appendChild(temp)
            dayDiv.appendChild(icon)
        }
    }
})



//Seattle is 7 hours ahead so to get the lunch time at 12:00:00 is GMT to seattle time I would need the 18:00:00
// for (i=0; i<weatherData.list.length; i++) {
//     var time = weat
// }

// &#xb0 degree symbol
