// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('.menu');

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on

// last modified

document.getElementById('updatedDate').innerHTML = document.lastModified;

document.getElementById('copyYear').innerHTML = new Date().getFullYear(); // copyright year

const images = document.querySelectorAll("[data-src]");


// Display the amount of time in days
//  Using local storage.

// Get the first day.
const day1 = new Date();
const firstDay = day1.getDay();

// Set firstday in local storage
localStorage.setItem('firstDay', firstDay);
console.log(localStorage)
console.log(localStorage.getItem('firstDay'));

// Get the current day of the user visit
const userDay = new Date();
let userDays = userDay.getDay();

// Find the difference between the days.
let fd = localStorage.getItem('firstDay');
console.log(userDays - parseInt(fd))

// Get the element in html and set its textContent to days elapsed.
let daysElapsed = document.querySelector('.last-visited');
daysElapsed.textContent = userDays - parseInt(fd);
