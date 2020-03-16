"use strict"
document.addEventListener('click', elem => {
if(elem.target.classList.contains("menu__link")){
    if(elem.target.closest(".menu").querySelector(".menu_active") != null) {
        elem.target.closest(".menu").querySelector(".menu_active").classList.remove("menu_active");
    }
    elem.target.closest(".menu__item").querySelector(".menu_sub").classList.add("menu_active");
    elem.preventDefault();
}

});