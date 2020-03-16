"use strict";
const arrows = Array.from(document.querySelectorAll(".slider__arrow"));
console.log(arrows);  
let slidersArr = Array.from(document.querySelectorAll(".slider__item"));
let sliderNumber = 0;
console.log(slidersArr);
arrows.forEach(element => {
    element.addEventListener('click', e => {
        if(element.classList.contains("slider__arrow_next")){
            if(sliderNumber === slidersArr.length - 1) {
                sliderNumber = 0;
            } else {
                sliderNumber++;
            }
        } else {
            if(sliderNumber === 0) {
                sliderNumber = slidersArr.length - 1;
            } else {
                sliderNumber --;
            }
        }
        document.querySelector(".slider__item_active").classList.remove("slider__item_active");
        slidersArr[sliderNumber].classList.add("slider__item_active");
    })
});

const dots = Array.from(document.querySelectorAll(".slider__dot"));
dots.forEach(element => {
    element.addEventListener('click', e => {
        sliderNumber = dots.indexOf(element);
        if(document.querySelector(".slider__dot_active") != null) {
            document.querySelector(".slider__dot_active").classList.remove("slider__dot_active");
        };
        e.target.classList.add("slider__dot_active");
        document.querySelector(".slider__item_active").classList.remove("slider__item_active");
        slidersArr[sliderNumber].classList.add("slider__item_active");
    })
})