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