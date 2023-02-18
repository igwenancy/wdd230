const requestURL = "scripts/data.json";

fetch(requestURL)
    .then((response) => response.json())
    .then((jsonObject) => {
    console.table(jsonObject);
    const businesses = jsonObject["businesses"];
    businesses.forEach(displayBusinesses);
});

function displayBusinesses(business) {
    // Create a section/card
    let card = document.createElement("section");
    let busName = document.createElement("p");
    let busAddress = document.createElement("p");
    let busPhone = document.createElement("p");
    let busWebsite = document.createElement("a");
    let busLogo = document.createElement("img");

    // Update the textContent of each new element
    busName.textContent = `${business.name}`;
    busName.setAttribute("id", "business-name");
    busAddress.textContent = `${business.address}`;
    busPhone.textContent = `${business.phone}`;
    busWebsite.textContent = `${business.website}`;
    busWebsite.setAttribute('href', business.website);
    busLogo.setAttribute("src", business.imageurl);
    busLogo.setAttribute("alt", `${business.name} logo`);
    
    // Appened list items in p-tags into the section/card
    card.appendChild(busLogo)
    card.appendChild(busName);
    card.appendChild(busAddress);
    card.appendChild(busPhone);
    card.appendChild(busWebsite);

    // Append card to the existing div.
    document.querySelector("div.cards").appendChild(card);
}

const gridView = document.querySelector("#directory-card");
const listView = document.querySelector("#directory-list");
const currentDivView = document.querySelector(".cards");

gridView.addEventListener('click', togridView);

function togridView() {
    currentDivView.classList.remove("list");
    currentDivView.classList.add("cards");
}

listView.addEventListener('click', tolistView);

function tolistView() {
    currentDivView.classList.remove("cards");
    currentDivView.classList.add("list");
}