"use strict"
// данная функция работает с простым таймером секунд
// let tick = () => {
//     let countdownStart = document.getElementById("timer").textContent;
//     countdownStart = Number(countdownStart);
//      countdownStart -= 1;
//      timer.textContent = String(countdownStart);
//      if( timer.textContent === "0") {
//         clearInterval(counting);
//         alert("Вы победили в конкурсе")

//     }
// }

const timer = document.getElementById("timer");
const countdownStartAdvanced = document.getElementById("timer").textContent;
let timeParser = countdownStartAdvanced.split(":");//парсим строку по разделителю 
let timeParserToNum = timeParser.map(item => Number(item)); // все строки делаем числами, чтобы математически с ними работать

let tickAdvanced = () => {
    timeParserToNum[2] -= 1;// делаем тик, вычитаем секунду
        let timeArray = timeParserToNum.map(item => String(item)); // обратно делаем все строками, чтобы отображать
        timeArray.forEach((element,index) => {
            if(element.length === 1) {
                timeArray[index] = "0" + element;
            }
        });
        const timeString = `${timeArray[0]}:${timeArray[1]}:${timeArray[2]}`
        console.log(timeString);

        timer.textContent = timeString;
        if(timeParserToNum[1] === 0 && timeParserToNum[2] === 0) {
            timeParserToNum[0] = timeParserToNum[0] - 1;
            timeParserToNum[1] = 60;

        }
        if(timeParserToNum[2] === 0) {
            timeParserToNum[2] = 60;
            timeParserToNum[1] = timeParserToNum[1] - 1;
        } 

        if(timer.textContent === "00:00:00") {
            clearInterval(counting);
            download.click();
        }        
// этот код отрабатывает, но почему-то на таймере в момент алерта 00:00:01 не успевает открисовать? как исправить не знаю
        }
    



 let counting = setInterval(tickAdvanced, 1000);
