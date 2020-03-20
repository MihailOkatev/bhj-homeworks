"use strict";
document.addEventListener('click', e => {
    if(e.target.classList.contains("menu__link") && e.target.closest(".menu__item").querySelector(".menu_sub") != null) {
        e.preventDefault();
        if(e.target.closest(".menu__item").querySelector(".menu_sub").classList.contains("menu_active")) {
            e.target.closest(".menu__item").querySelector(".menu_sub").classList.remove("menu_active")
        } else { 
        Array.from(e.target.closest(".menu").querySelectorAll(".menu_active")).forEach(elem => {
            elem.classList.remove("menu_active");
        });
        e.target.closest(".menu__item").querySelector(".menu_sub").classList.add("menu_active");
        }
    }

});