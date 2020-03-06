const cookie = document.getElementById("cookie");
const clickPerSecond = document.getElementById("clickPerSecond"); 
let clicker__counter = document.getElementById("clicker__counter");
let clicks = Number(clicker__counter.textContent);
cookie.onclick = clickIncremention;
let clickTimeArray =[];
    
function clickIncremention(){
    clicks++;
    clicks % 2 === 0 ? cookie.width = cookie.width * 1.5: cookie.width = cookie.width / 1.5;
    const clickDate = new Date().getTime();
     clickTimeArray.push(clickDate);
     const diff = (new Date().getTime() - clickTimeArray[clickTimeArray.length - 2]) / 1000;
     let clicksPerSec = 1 / diff;
     clicksPerSec = clicksPerSec.toFixed(2);
     if(clicks < 2) {
        clickPerSecond.textContent  = "Недостаточно кликов для определения скорости "
     } else {
        clickPerSecond.textContent = ` приблизительно ${clicksPerSec} кликов в секунду`;

     }
    clicker__counter.textContent = String(clicks);
}
