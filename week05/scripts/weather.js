

const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Trier,us&units=imperial&appid=8b8247dc4bef2750033c5fe6b9eb9b91"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        weather(jsObject);
    });

function weather(jsObject){
    document.querySelector('#current-temp').textContent = jsObject.main.temp;
    const iconsrc = `http://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
    document.querySelector('#desc').textContent = jsObject.weather[0].description;
    document.querySelector('#wind-speed').textContent = jsObject.wind.speed;
}

