"use strict";
let answersOfRobot = ["Я высший разум, поэтому не буду разговаривать с менее разумной формой жизни", "Все наши операторы заняты, освободятся примерно через 10 000 000 000 лет, оставайтесь на линии", "у нас так много клиентов, что процессор перегружен даже у меня", "уходите!", "Перерыв на подзрадку", "Ошибка обработки вашего запроса", "Просите что-нибудь другое"];

let sidePanel = document.querySelector(".chat-widget");
let chatField = document.getElementById('chat-widget__input');
console.log(sidePanel);
sidePanel.addEventListener('click', () => {
    sidePanel.classList.add('chat-widget_active');
    lastMsgTime = new Date().getTime();
});
let errorMessage = document.createElement('span');
let messagesBox = document.querySelector(".chat-widget__messages-container");
let lastMsgTime;
errorMessage.style.color = "#ff0000";
errorMessage.textContent = "попытка отправки пустого сообщения";
errorMessage.id = "errMsg";
let waitForAnswer = document.createElement('span');
waitForAnswer.textContent = "робот обдумывает ответ";
const messages = document.querySelector('.chat-widget__messages');
let tick = setInterval(chekDelay, 1000);

document.addEventListener('keydown', e => {
    if (e.key === "Enter") {
        if (chatField.value === "") {


            chatField.before(errorMessage);
        } else {
            messages.innerHTML += `
  <div class="message_client">
    <div class="message__time">${currentTime()}</div>
    <div class="message__text">
    ${chatField.value}
    </div>
  </div>`;
            autoScroll();
            lastMsgTime = new Date().getTime();
            chatField.value = "";
            chatField.before(waitForAnswer);
            setTimeout(robotAnswers, 1500);

        }
    }
});
chatField.addEventListener('keydown', () => {
    if (document.getElementById("errMsg") !== undefined) {
        errorMessage.remove();
    }
});

function currentTime() {
    let time;
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    time = `${hours}:${minutes}`;
    return time;
}

function robotAnswers() {
    waitForAnswer.remove();
    messages.innerHTML += `
    <div class="message">
    <div class="message__time">${currentTime()}</div>
    <div class="message__text">
     ${answersOfRobot[getRandomInRange(0, answersOfRobot.length - 1)]}
    </div>
  </div>
`;
    autoScroll();
}

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function autoScroll() {
    messagesBox.scrollTop = messagesBox.scrollHeight;
}

function chekDelay() {
    console.log(new Date().getTime() - lastMsgTime);
    if ((new Date().getTime() - lastMsgTime) >= 30000) {
        messages.innerHTML += `
    <div class="message">
    <div class="message__time">${currentTime()}</div>
    <div class="message__text">
    Вы уснули там что ли?
    </div>
  </div>
`;
        clearInterval(tick);
        lastMsgTime = new Date().getTime();
        setInterval(chekDelay, 1000)
    }
}