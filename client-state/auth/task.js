"use strict";
const signin = document.getElementById("signin");
const form = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const userID = document.getElementById("user_id");
window.onload = pageLoad;


function pageLoad() {
    if(localStorage.getItem("id") == undefined) {
        signin.classList.add("signin_active");
    } else {
        welcome.classList.add("welcome_active");
        userID.textContent = localStorage.getItem("id");
    }
}

form.onsubmit = (e) => {
    e.preventDefault();
    console.log("Тык");
    let request = new XMLHttpRequest();
    let data = new FormData(form);
    console.log(data);
    request.open("POST","https://netology-slow-rest.herokuapp.com/auth.php");
    request.send(data);
    request.addEventListener("readystatechange", () => {
        if(request.readyState === 4) {
            let answer = JSON.parse(request.responseText);
            if(answer.success) {
                localStorage.setItem("id",answer.user_id);
                welcome.classList.add("welcome_active");
                userID.textContent = answer.user_id;
                signin.classList.remove("signin_active");
            } else {
                let eroorBlock = document.createElement("span");
                eroorBlock.textContent = "Неверный логин или пароль";
                eroorBlock.style = "color:red";
                form.after(eroorBlock);
            }
        }
    })

}