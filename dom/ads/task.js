"use strict";
const rotatorsArr = Array.from(document.querySelectorAll(".rotator"));
let itemsBox = [];
rotatorsArr.forEach((elem, index) => {
    itemsBox[index] = Array.from(elem.querySelectorAll(".rotator__case"));
});

function adsRotate(adsArr) {
    let i = 0;
    adsArr[i].style.color = adsArr[i].getAttribute("data-color");
    setTimeout(nextstep, delayCounting(adsArr, i), adsArr, i);
}

function nextstep(adsArr, i) {
    adsArr[i].classList.remove("rotator__case_active");
    i++;
    if (i === adsArr.length) {
        i = 0;
    }
    adsArr[i].classList.add("rotator__case_active");
    adsArr[i].style.color = adsArr[i].getAttribute("data-color");
    setTimeout(nextstep, delayCounting(adsArr, i), adsArr, i);

}

function delayCounting(adsArr, i) {
    return adsArr[i].getAttribute("data-speed");

}

for (let i = 0; i < itemsBox.length; i++) {
    adsRotate(itemsBox[i]);
}