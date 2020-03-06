"use strict"
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

let deadCount = 0;
let lostCount = 0;

let holes = [];
function holeCreate(){
    
    for(let i = 1; i <10; i++) {
       let hole = document.getElementById(`hole${i}`);
       hole.onclick = checkhole;
    }

}

function pointsDisplay() {
    dead.textContent = deadCount;
    lost.textContent = lostCount;
}

function statisticRefresh() {
    deadCount = 0;
    lostCount = 0;
    pointsDisplay();
}

function checkhole() {
    this.classList.contains('hole_has-mole') ? deadCount++ : lostCount++;
    pointsDisplay();
    
    if(deadCount === 10) {
        alert("Вы Победили!");
        statisticRefresh();

    
    }
    if(lostCount === 5) {
        alert("Вы проиграли:(");
        statisticRefresh();
    }
}


holeCreate();