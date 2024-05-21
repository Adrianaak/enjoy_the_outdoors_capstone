"use strict"

window.onload = () => {
    // Run the code that populates the category dropdown
    initCategoriesDropdown();

    // Wrap the event listener registration inside the window.onload function
    // to ensure that the DOM is fully loaded before accessing its elements
    let categoriesDropdown = document.querySelector("#nationalParkSelect");

    if (categoriesDropdown) {
        // Make sure the element exists before trying to add an event listener
        categoriesDropdown.addEventListener("change", getNationalParks);
    }
}

function getNationalParks(event) {
    // Get the selected National Park from the dropdown which is also the event.target
    let selectedNationalPark = event.target.value;
    console.log(selectedNationalPark)

    // Find the matching parks
    let matchingNationalParks = nationalParksArray.filter((park) => {
        return park.State === selectedNationalPark;
    });

    // Get a hold of the table body
    let tableBody = document.querySelector("#nationalParkTableBody");

    // Clear the innerHTML
    tableBody.innerHTML = "";

    // Loop through matching parks and build table rows
    matchingNationalParks.forEach((park) => {
        buildTableRow(tableBody, park);
    });
}

function buildTableRow(tableBody, data) {
    // Create the row to hold the data
    let newRow = tableBody.insertRow();

    // Loop over all the properties
    for (let property in data) {
        let newTd = newRow.insertCell();
        newTd.innerText = data[property];
    }
}

function initCategoriesDropdown() {
    // Get the dropdown for the categories
    let categoriesDropdown = document.querySelector("#nationalParkSelect");

    // Create the default option
    let defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select a Park";

    // Append default option
    categoriesDropdown.appendChild(defaultOption);

    // Loop through locationsArray and create options
    locationsArray.forEach((category) => {
        let newOption = document.createElement("option");
        newOption.value = category;
        newOption.textContent = category;
        categoriesDropdown.appendChild(newOption);
    });
}

function getParkInCategory(park, category) {
    // Start by creating an empty list to hold matches
    let matching = [];

    // Loop over the parks to find matches
    park.forEach((item) => {
        if (item.category === category) {
            matching.push(item);
        }
    });

    // Return all the matching menu items
    return matching;
}
