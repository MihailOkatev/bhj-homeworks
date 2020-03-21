"use strict";
document.addEventListener('click', e => {
    const subMenu = e.target.closest(".menu__item").querySelector(".menu_sub");
    if(e.target.classList.contains("menu__link") && subMenu != null) {
        e.preventDefault();
        if(subMenu.classList.contains("menu_active")) {
            subMenu.classList.remove("menu_active")
        } else { 
        Array.from(e.target.closest(".menu").querySelectorAll(".menu_active")).forEach(elem => {
            elem.classList.remove("menu_active");
        });
        subMenu.classList.add("menu_active");
        }
    }

});