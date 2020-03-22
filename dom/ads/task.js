"use strict";
const rotatorsArr = Array.from(document.querySelectorAll(".rotator"));
let itemsBox = [];
function adsRotate() {
    rotatorsArr.forEach((elem,index) => {
        itemsBox[index] = Array.from(elem.querySelectorAll(".rotator__case"));
        
    });
    itemsBox.forEach((el,index) => {    
       let adNum = 0;
       el[adNum].classList.remove("rotator__case_active");
       adNum++;
       el
    });
}


let tick = setInterval(adsRotate, 1000);

window.onload = tick;