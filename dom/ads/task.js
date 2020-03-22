"use strict";
let tick = setInterval(adRotator, 1000);
window.onload = tick;
const rotatorsArr = Array.from(document.querySelectorAll(".rotator"));
let itemsBox = [];
rotatorsArr.forEach((elem,index) => {
    itemsBox[index] = Array.from(elem.querySelectorAll(".rotator__case"));
    
});
console.log(rotatorsArr);
console.log(itemsBox);
function adRotator() {
    itemsBox.forEach(el => {
        let adNum = 0;
        nextAdd(el,adNum);
});
}
function nextAdd(el,adNum){
    el[adNum].classList.remove("rotator__case_active");
    adNum++;
    el[adNum].classList.add("rotator__case_active");
}


