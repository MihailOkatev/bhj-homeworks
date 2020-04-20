"use strict";
const loaderImage = document.querySelector(".loader");
const items = document.getElementById("items");
document.addEventListener("DOMContentLoaded", () => {
    let request = new XMLHttpRequest();
    request.open("GET", "https://netology-slow-rest.herokuapp.com");
    request.send();
    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4) {
            if (request.status === 200) {
                let serverAnswer = JSON.parse(request.responseText);
                let valutes = serverAnswer.response.Valute;
                valutes = Object.values(valutes);
                for (let val of valutes) {
                    items.innerHTML += `<div class='item'><div class='item__code'>${val.CharCode}</div><div class='item__value'>${val.Value}</div></div><div class="item__currency">
                руб.
            </div>`
                }
            }


        } else {
            items.innerHTML += `<p style="color:red">Что-то пошло не так</p>`
        }
        loaderImage.classList.remove("loader_active");

    });
});
