"use strict";
const popupMain = document.getElementById("modal_main");
const successWindow = document.getElementById("modal_success");
function showModal() {
    if(getCookie("popup") == null) {
        popupMain.classList.add("modal_active");
    }

}
function showSuccess() {
    successWindow.classList.add("modal_active");

}
const body = document.getElementsByTagName("body")[0];
body.onload = showModal;
document.addEventListener('click', e => {
    if(e.target.classList.contains("modal__close")) {
        e.target.closest("div[id]").classList.remove("modal_active");
    }
    if(e.target.classList.contains("show-success")) {
        showSuccess();
    }
    setcookie();
});

function setcookie() {
    document.cookie = "popup=showed;max-age=86400";
    alert(getCookie("popup"));
}

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
}

