let currentYear = new Date();
let year = currentYear.getFullYear();
document.getElementById('currentyear').textContent = year;

/* Display current date */
let currentTime = new Date();
let time = `${currentTime.getHours()} : ${currentTime.getMinutes()} : ${currentTime.getSeconds()}`;

const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options) + '. ' + time;s