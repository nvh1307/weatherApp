var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortdes = document.querySelector('.short-des')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind')
var cloud = document.querySelector('.cloud')

async function changeWeatherUI(){
    search.value.trim()
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=cb8d857e9528680474d1a7a90b239fba`
    let data = await fetch.(apiURL).then(res=>res.json())
    console.log(data)
    city.innerText=data.name
    country.innerText=data.sys.country
    visibility.innerText=data.visibility
    wind.innerText=data.wind.speed
    cloud.innerText=data.main.humidity
    value.innerText=(data.main.temp -273.15)
    shortdes.innerText=data.weather[0]? data.weather[0].main :''
    time.innerText = new Date().toLocaleString('vi')

