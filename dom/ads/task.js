"use strict";
const rotatorsArr = Array.from(document.querySelectorAll(".rotator"));
let itemsBox = [];
let delay;
let adNum = [];
rotatorsArr.forEach((elem,index) => {
    itemsBox[index] = Array.from(elem.querySelectorAll(".rotator__case"));
    adNum[index] = 0;
 });

function adsRotate() {
    itemsBox.forEach((element,index) => {
        let delay = element[adNum[index]].getAttribute("data-speed");
        console.log(delay);
        element[adNum[index]].style.color = element[adNum[index]].getAttribute("data-color");
       element[adNum[index]].classList.remove("rotator__case_active");
       adNum[index]++;
       if(adNum[index] === element.length) {
        adNum[index] = 0;
    }
       console.log(adNum[index])
       element[adNum[index]].classList.add("rotator__case_active");
       console.log("тик");
       

    })
    
    }
   
let tick = setInterval(adsRotate, 1000);
window.onload = tick;


