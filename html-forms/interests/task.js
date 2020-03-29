"use strict";
let selections = document.querySelectorAll(".interest__check");
selections = Array.from(selections);
selections.forEach(el => {
    el.addEventListener('click', e => {
        const children = e.target.closest(".interest").querySelectorAll(".interest__check");
        if (e.target.checked) {
            children.forEach(el => {
                el.checked = true;
            })
        } else {
            children.forEach(el => {
                el.checked = false;
            })
        }
        let target = e.target
        parentCheck(target);
    });
});

function parentCheck(target) {
    if (target.closest(".interests_active") != null) {
        let listItems = Array.from(target.closest(".interests_active").querySelectorAll(".interest__check"));
        if (listItems.some(item => item.checked || item.indeterminate)) {
            target.closest(".interests_active").parentElement.querySelector(".interest__check").indeterminate = true;
        } else {
            target.closest(".interests_active").parentElement.querySelector(".interest__check").indeterminate = false;
        }
        if (listItems.every(item => item.checked)) {
            target.closest(".interests_active").parentElement.querySelector(".interest__check").indeterminate = false;
            target.closest(".interests_active").parentElement.querySelector(".interest__check").checked = true;
        }
        if (listItems.every(item => item.checked === false)) {
            target.closest(".interests_active").parentElement.querySelector(".interest__check").checked = false;

        }
        let parentGroupCheckbox = target.closest(".interests_active").parentElement.querySelector(".interest__check");
        parentCheck(parentGroupCheckbox);
    }

}