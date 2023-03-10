var year=new Date().getFullYear();
document.getElementById("copyright").innerHTML = year;

let date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = date;
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById("lastModified").textContent = new Date().toLocaleDateString('en-US', options);


const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `1`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

const rating = document.getElementById("rating");
const rangevalue = document.getElementById("rating");

function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
}

rangevalue.addEventListener('change', displayRatingValue);
rangevalue.addEventListener('input', displayRatingValue);


const user1 = document.querySelector("#username");
const user2 = document.querySelector("#username2");

user2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (user1.value !== user2.value) {
		message.textContent = "Passwords DO NOT MATCH!";
		message.style.display = "block";
		user2.style.backgroundColor = "#aa3333";
		user2.style.color = "#fff";
		user2.focus();
		user2.value = "";
	} else {
		message.style.display = "none";
		user2.style.backgroundColor = "#fff";
		user2.style.color = "#000";
	}
}

function showMessage() {
	var message=document.getElementById("btnSubmit").value;
	display_message.innerHTML = message;
}



const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Rexburg,us&units=imperial&appid=8b8247dc4bef2750033c5fe6b9eb9b91"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        weather(jsObject);
        getWindChill(jsObject);
    });

function weather(jsObject){
    document.querySelector('#weather-temp').textContent = jsObject.main.temp;
    const iconsrc = `http://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
    document.querySelector('#desc').textContent = jsObject.weather[0].description;
    document.querySelector('#wind-speed').textContent = jsObject.wind.speed;
}

