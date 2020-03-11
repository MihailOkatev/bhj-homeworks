"use strict"
const popupMain = document.getElementById("modal_main");
let modalClose = document.getElementsByClassName("modal__close");
modalClose = Array.from(modalClose);
console.log(modalClose);
modalClose.forEach(element => {
    element.onclick = closeModalWindow;
});
const successButton = document.getElementsByClassName("show-success")[0];
const successWindow = document.getElementById("modal_success");
console.log(popupMain);
function showModal() {
    popupMain.classList.add("modal_active");
}
function closeModalWindow() {
    this.closest("div[id]").classList.remove("modal_active");
}
function showSuccess() {
    successWindow.classList.add("modal_active");

}
const body = document.getElementsByTagName("body")[0];
console.log(body);
body.onload = showModal;
modalClose.onclick = closeModalWindow;
successButton.onclick = showSuccess;