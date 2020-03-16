"use strict"
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
document.addEventListener('click', element => {
    if(element.target.classList.contains("modal__close")) {
        element.target.closest("div[id]").classList.remove("modal_active");
    }
    if(element.target.classList.contains("show-success")) {
        showSuccess();
    }
});
