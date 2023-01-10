var year=new Date().getFullYear();
document.getElementById("copyright").innerHTML = year;

let date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = date;
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById("lastModified").textContent = new Date().toLocaleDateString('en-US', options);