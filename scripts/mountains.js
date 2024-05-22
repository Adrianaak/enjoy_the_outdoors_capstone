"use strict"




window.onload = () => {

    initMountainDropdown();

    let mountainDropdown = document.querySelector("#mountainSelect")

    //we want to display selected pet when the dropdown is changed
    mountainDropdown.addEventListener("change", displayMountainCard)


}


function displayMountainCard(event) {

    let cardImage = document.querySelector("#cardImage");
    cardImage.src = mountain.image;
    cardImage.alt = mountain.name;

    let cardTitle = document.querySelector("#cardTitle");
    cardTitle.innerHTML = mountain.name

}



function initMountainDropdown(mountain) {

    //let's get a hold of the dropdown for the categories from the activities.html
    let mountainDropdown = document.querySelector("#mountainSelect");

    //create the element for the default option
    let defaultOption = document.createElement("option");

    //this is whate we get back in JS when we ask for the selected value
    defaultOption.value = "";

    //this is what the user actually selects from the dropdown
    defaultOption.textContent = "Select a Mountain";

    //add the option we created to the dropdown
    mountainDropdown.appendChild(defaultOption);

    //write a loop to work with each individual category and build an option for it
    mountain.forEach((m) => {

        //create the new option for the category we are on in the loop
        let newOption = document.createElement("option");

        //set the value for the option
        newOption.value = m.name;

        //set the textContent that the user will see when choosing a category
        newOption.textContent = m.name;

        mountainDropdown.appendChild(newOption);

    })


}