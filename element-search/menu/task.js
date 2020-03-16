"use strict"
document.addEventListener('click', e => {
if(e.target.classList.contains("menu__link")){
    if(e.target.closest(".menu").querySelector(".menu_active") != null) {
        e.target.closest(".menu").querySelector(".menu_active").classList.remove("menu_active");
    }
    e.target.closest(".menu__item").querySelector(".menu_sub").classList.add("menu_active");
    e.preventDefault();
}

});