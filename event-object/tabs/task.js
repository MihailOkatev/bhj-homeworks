"use strict";
const tabSwitchers = Array.from(document.querySelectorAll(".tab"));
const tabContent = document.querySelectorAll(".tab__content");

tabSwitchers.forEach((elem,index) => {
    elem.addEventListener('click', e => {
        e.target.closest(".tabs").querySelector(".tab_active").classList.remove("tab_active");
        e.target.classList.add("tab_active");
        e.target.closest(".tabs").querySelector(".tab__content_active").classList.remove("tab__content_active");
        Array.from(tabContent)[index].classList.add("tab__content_active");
    });
});

