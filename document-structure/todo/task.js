"use strict";
window.onload = restore;
let taskList = document.getElementById("tasks__list");
const addTaskButton = document.getElementById("tasks__add");
let taskListArr = [];
let taskField = document.getElementById('task__input');
addTaskButton.addEventListener('click', e => {
    e.preventDefault();
    if (taskField.value !== "") addTask();
});

function addTask() {
    let newTask = document.createElement('div');
    let taskTitle = document.createElement('div');
    let taskDelete = document.createElement('a');
    newTask.classList.add("task");
    newTask.appendChild(taskTitle);
    taskTitle.classList.add("task__title");
    taskTitle.textContent = taskField.value;
    newTask.appendChild(taskDelete);
    taskDelete.classList.add("task__remove");
    taskDelete.innerHTML = "&times;";
    taskDelete.addEventListener('click', e => {
        e.target.closest(".task").remove();
        taskListArr.splice(taskListArr.indexOf(e.target.closest(".task").querySelector(".task__title").textContent), 1);
        saveItem();
    });
    taskList.appendChild(newTask);
    taskListArr.push(taskTitle.textContent);
    taskField.value = "";
    saveItem();
}

function saveItem() {
    localStorage.setItem("tasksArr", JSON.stringify(taskListArr));
}

function restore() {
    if (localStorage.getItem("tasksArr") !== null) {
        JSON.parse(localStorage.getItem("tasksArr")).forEach((elem) => {
            taskField.value = elem;
            addTaskButton.click();
        });
    }
}