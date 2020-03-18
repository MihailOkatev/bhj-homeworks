"use strict"
const dropdown = document.querySelector(".dropdown");
const dropdownList = document.querySelector(".dropdown__list");
const listElems = document.querySelectorAll(".dropdown__item");
const dropdownValue = document.querySelector(".dropdown__value");
dropdown.addEventListener('click', e => {
    e.preventDefault();
    console.log("клац");
    dropdownList.classList.toggle("dropdown__list_active");
    dropdownValue.textContent = e.target.textContent;

});