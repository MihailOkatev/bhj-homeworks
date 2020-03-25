"use strict";
let fontSizeBtns = Array.from(document.querySelectorAll(".font-size"));
let colorControlBtns = Array.from(document.querySelectorAll(".book__control_color"));
let bgColorControlBtns = Array.from(document.querySelectorAll(".book__control_background"));

fontSizeBtns.forEach(el => {
   el.addEventListener("click", e => {
       e.preventDefault();
       e.target.closest(".book__control_font-size").querySelector(".font-size_active").classList.remove("font-size_active");
       e.target.classList.add("font-size_active");
       document.querySelector(".book__content").classList.forEach((el,index) => {
           if(el.includes("fs-")) {
            document.querySelector(".book__content").classList.remove(el);
           }
       });
       document.querySelector(".book__content").classList.add(`book_fs-${e.target.getAttribute("data-size")}`);
       console.log(document.querySelector(".book__content").classList);

   });
});

colorControlBtns.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        console.log(e.target.closest(".book__control_color"));
        e.target.closest(".book__control_color").querySelector(".color_active").classList.remove("color_active");
        document.querySelector(".book__content").classList.forEach((el,index) => {
            if(el.includes("color-")) {
             document.querySelector(".book__content").classList.remove(el);
            }
        });
        e.target.classList.add("color_active");
        document.querySelector(".book__content").classList.add(`book_color-${e.target.getAttribute("data-color")}`)


    });
});

bgColorControlBtns.forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault();
        e.target.closest(".book__control_background").querySelector(".color_active").classList.remove("color_active");
        document.querySelector(".book__content").classList.forEach((el,index) => {
            if(el.includes("bg-")) {
             document.querySelector(".book__content").classList.remove(el);
            }
        });
        e.target.classList.add("color_active");
        document.querySelector(".book__content").classList.add(`book_bg-${e.target.getAttribute("data-color")}`)
    });
});