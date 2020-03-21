"use strict";
const arrows = Array.from(document.querySelectorAll(".slider__arrow"));
const dots = Array.from(document.querySelectorAll(".slider__dot"));

let slidersArr = Array.from(document.querySelectorAll(".slider__item"));
let sliderNumber = 0;
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
        showSlide(sliderNumber);
        activeDot(sliderNumber);


    });
});

dots.forEach(element => {
    element.addEventListener('click', e => {
        sliderNumber = dots.indexOf(element);
        showSlide(sliderNumber);
        activeDot(sliderNumber);
    });
});

function showSlide(sliderNumber) {
    document.querySelector(".slider__item_active").classList.remove("slider__item_active") // закрываем любой активный слайд
    slidersArr[sliderNumber].classList.add("slider__item_active"); // открываем нужный слайд

}

function activeDot(sliderNumber) {
    document.querySelector(".slider__dot_active").classList.remove("slider__dot_active") // выключаем активную точку
    dots[sliderNumber].classList.add("slider__dot_active") // устанавливаем точку на активный слайд
}