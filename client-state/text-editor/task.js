"use strict";
const editor = document.getElementById("editor");
const clearBtn = document.getElementById("clear");
window.onload = textRestore;
editor.addEventListener("input", () => {
    localStorage.setItem("text", editor.value);
    console.log(editor.value)

});

clearBtn.addEventListener("click", () => {
    editor.value = "";
    if (localStorage.getItem("text") !== null) {
        localStorage.removeItem("text");
    }
});

function textRestore() {
    if (localStorage.getItem("text") !== null) {
        editor.value = localStorage.getItem("text");
    }
}

