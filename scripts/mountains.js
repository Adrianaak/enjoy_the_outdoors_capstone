"use strict";

window.onload = () => {
    // Run the code that populates the mountain dropdown
    initMountainDropdown();

    // Wrap the event listener registration inside the window.onload function
    // to ensure that the DOM is fully loaded before accessing its elements
    let mountainDropdown = document.querySelector("#mountainSelect");

    if (mountainDropdown) {
        // Make sure the element exists before trying to add an event listener
        mountainDropdown.addEventListener("change", getMountains);
    }
}

function getMountains(event) {
    // Get the selected mountain from the dropdown
    let selectedMountain = event.target.value;

    // Find the mountain data
    let mountain = mountainsArray.find(mountain => mountain.name === selectedMountain);

    // Get a hold of the card body
    let cardBody = document.querySelector("#cardBody");

    // Clear the innerHTML
    cardBody.innerHTML = "";

    // Build the card with mountain data
    buildCard(cardBody, mountain);
}

function buildCard(cardBody, data) {
    // Create the card element
    let card = document.createElement("div");
    card.classList.add("card");

    // Create card body
    let cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    // Create card title
    let cardTitle = document.createElement("span");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = data.name;

    // Create card image
    let cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top");
   // cardImage.classList.add("w-50")
    cardImage.src = "../enjoy_the_outdoors_capstone/images/" + data.img;

    cardImage.alt = data.name;

    console.log(data.img)

    // Create card description
    let cardDescription = document.createElement("p");
    cardDescription.textContent = data.desc;

    // Append elements to card
    cardContent.appendChild(cardImage);
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardDescription);
    card.appendChild(cardContent);

    // Append card to card body
    cardBody.appendChild(card);
}

function initMountainDropdown() {
    // Get the dropdown for the mountains
    let mountainsDropdown = document.querySelector("#mountainSelect");

    // Create the default option
    let defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "";

    // Append default option
    mountainsDropdown.appendChild(defaultOption);

    // Loop through mountainsArray and create options
    mountainsArray.forEach(mountain => {
        let option = document.createElement("option");
        option.value = mountain.name;
        option.textContent = mountain.name;
        mountainsDropdown.appendChild(option);
    });
}