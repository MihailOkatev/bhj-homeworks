"use strict";
let selections = document.querySelectorAll(".interest__check");
selections = Array.from(selections);
selections.forEach(el => {
    el.addEventListener('click', e =>{
        const children = e.target.closest(".interest").querySelectorAll(".interest__check");
    if(e.target.checked) {
        children.forEach(el => {
            el.checked = true;
        })
    } else {
        children.forEach(el => {
            el.checked = false;
        })
    }
    if(e.target.closest(".interests_active") != null) {
    let listitems = Array.from(e.target.closest(".interests_active").querySelectorAll(".interest__check"));
    if(listitems.some(item => item.checked === true)) {
        e.target.closest(".interests_active").parentElement.querySelector(".interest__check").indeterminate = true;
    } else {
        e.target.closest(".interests_active").parentElement.querySelector(".interest__check").checked = false;

    }
    }
    });
    });
