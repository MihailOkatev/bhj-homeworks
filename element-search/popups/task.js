"use strict";
const popupMain = document.getElementById("modal_main");
const successWindow = document.getElementById("modal_success");
function showModal() {
    popupMain.classList.add("modal_active");
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
});
