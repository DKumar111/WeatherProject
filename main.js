const apikey = '41c534ba00670bab56dee13a16f1d1ca';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';


const locationInput = document.querySelector("#locationInput")
const searchButton = document.querySelector("#searchButton")
const locationElement = document.querySelector("#location")
const temperatureElement = document.querySelector("#temperature")
const descriptionElement = document.querySelector("#description")
const longitudeElement          = document.querySelector("#longitude")
const latitudeElement           = document.querySelector("#latitude")
const MinimumTemperatureElement = document.querySelector("#MinimumTemperature")
const MaximumTemperatureElement = document.querySelector("#MaximumTemperature")
const PressureElement           = document.querySelector("#Pressure")
const HumidityElement           = document.querySelector("#Humidity")
const WindSpeedElement          = document.querySelector("#WindSpeed")
const CountryElement            = document.querySelector("#Country")
const SunriseElement            = document.querySelector("#Sunrise")
const SunsetElement             = document.querySelector("#Sunset")



searchButton.addEventListener('click', () => {
    console.log("button clicked");
    const location = locationInput.value;
    if(location){
        fetchWeather(location);
    }
})

function fetchWeather(location){
    const url = `${apiUrl}?q=${location}&appid=${apikey}&units=metric`;
    fetch(url)
        .then(response=>response.json())
        .then(data=>{
            // const d =new date()
        locationElement.textContent = data.name;
        temperatureElement.textContent = `${Math.round(data.main.temp)}C`;
        descriptionElement.textContent = data.weather[0].description; 
        longitudeElement.textContent  =   data.coord.lon;    
        latitudeElement.textContent    =    data.coord.lat;  
        MinimumTemperatureElement.textContent = data.main.temp_min;
        MaximumTemperatureElement.textContent = data.main.temp_max;
        PressureElement.textContent          =  data.main.pressure;
        HumidityElement.textContent          =  data.main.humidity;
        WindSpeedElement.textContent         =  data.wind.speed;
        CountryElement.textContent           =  data.sys.country;
        const sunrise = data.sys.sunrise;
        const date_rise = new Date(sunrise*1000);
        SunriseElement.textContent           =  date_rise;
        const sunset = data.sys.sunset;
        const date_set = new Date(sunset*1000);
        SunsetElement.textContent             = date_set;
    })
        .catch (error => {
            console.error('Error fetching weather data:', error)
        })
    
}