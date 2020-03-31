"use strict";
let tooltipDiv = document.createElement('div');
const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));
hasTooltip.forEach(element => {
    element.addEventListener('click', e => {
        e.preventDefault();
        if(e.target.previousElementSibling != null && e.target.previousElementSibling.classList.contains("tooltip")) {
            e.target.previousElementSibling.classList.toggle("tooltip_active");
        } else {
        document.querySelectorAll(".tooltip_active").forEach(el => {
            el.classList.remove("tooltip_active");
        });

        // Даннная операция проверяет, что если эта подсказка уже показывалась, то не создавать больше элемент,
        // чтобы не вызывать перерисовку всей страницы, поскольку это дорогая операция.
        console.log(e.target.previousElementSibling);
        if ( e.target.previousElementSibling === null || !e.target.previousElementSibling.classList.contains("tooltip")) {
            showTooltip(e);
        }
        }

    });
});

function showTooltip(e) {
    console.log(e.target.getBoundingClientRect().top);
    console.log(e.target.getBoundingClientRect().bottom);
    console.log(e.target.getBoundingClientRect().left);
    console.log(e.target.getBoundingClientRect().right);
    console.log(window.innerWidth);
    console.log(window.innerHeight);


    let position = ["top","right", "bottom", "left"];
    tooltipDiv.classList.add("tooltip","tooltip_active");
    tooltipDiv.textContent = e.target.title;

    //случайным образом добавляем подсказке атрибуут, где показать подсказку
    tooltipPositionAtributteAdd(position);
    console.log(tooltipDiv);

    switch (tooltipDiv.getAttribute("data-position")) {
        case "top":
            //нужно проверить, поместится ли адекватно подсказка сверху, если нет - переназначаем атрибут.
            if(e.target.getBoundingClientRect().top < 40) {
                tooltipPositionAtributteAdd(position);
            } else {
                tooltipDiv.style.top = e.target.getBoundingClientRect().top - 25 + "px";
            }
            break;

        case "bottom":
            if(e.target.getBoundingClientRect().bottom < window.innerHeigh - 40) {
                tooltipPositionAtributteAdd(position);
            } else {

                tooltipDiv.style.top = e.target.getBoundingClientRect().top + 25 + "px";
            }
            break;

        case "left":
            if(e.target.getBoundingClientRect().left < 50) {
                tooltipPositionAtributteAdd(position);
            }  else {
                tooltipDiv.style.left = e.target.getBoundingClientRect().left - 25 - tooltipDiv.width + "px";
            }
                break;

        case "right":
            if(e.target.getBoundingClientRect().bottom < window.innerWidth - 40) {
                tooltipPositionAtributteAdd(position);
            } else {
                tooltipDiv.style.right = e.target.getBoundingClientRect().right + 35 + "px";
            }
            break;
            }
    if(tooltipDiv.getAttribute("data-position") === "top" || tooltipDiv.getAttribute("data-position") === "bottom"){
        tooltipDiv.style.left = e.target.getBoundingClientRect().left + "px";
    }
    if(tooltipDiv.getAttribute("data-position") === "right" || tooltipDiv.getAttribute("data-position") === "left") {
        tooltipDiv.style.top = e.target.getBoundingClientRect().top +"px";
    }
    e.target.before(tooltipDiv);


}



    function tooltipPositionAtributteAdd(position) {
    tooltipDiv.setAttribute("data-position",position[getRandomInRange(0, position.length - 1)]);

}

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}