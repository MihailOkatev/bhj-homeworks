"use strict";
let taskList = document.getElementById("tasks__list");
restore();
let n;
if (localStorage.length >= 1) {
    n = localStorage.length;
} else {
    n = 1;
}
console.log(`n = ${n}`);
const addTaskButton = document.getElementById("tasks__add");
let TaskField = document.getElementById('task__input');
addTaskButton.addEventListener('click', e => {
    e.preventDefault();
    if (TaskField.value != "") addTask();
});

function addTask() {
    let newTask = document.createElement('div');
    let taskTitle = document.createElement('div');
    let taskDelete = document.createElement('a');
    console.log(`n = ${n}`);
    newTask.setAttribute("data-tasknumber", String(n));
    newTask.classList.add("task");
    newTask.appendChild(taskTitle);
    taskTitle.classList.add("task__title");
    taskTitle.textContent = TaskField.value;
    newTask.appendChild(taskDelete);
    taskDelete.classList.add("task__remove");
    taskDelete.innerHTML = "&times;";
    taskDelete.addEventListener('click', e => {
        e.target.closest(".task").remove();
        n--;
        localStorage.removeItem(`task-${n}`);
    });
    taskList.appendChild(newTask);
    let saveTask = (newTask) => {
        if (n < 10) {
            localStorage.setItem(`task-0${n}`, newTask.outerHTML);
        } else {
            localStorage.setItem(`task-${n}`, newTask.outerHTML);
        }
    };
    saveTask(newTask);
    n++;
    TaskField.value = "";


}

function restore() {
    let keys = Object.keys(localStorage);
    keys = keys.sort();
    for (let key of keys) {
        console.log(key);
        if (key.includes("task")) {
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = localStorage.getItem(key);
            taskList.appendChild(tempDiv);
            tempDiv.querySelector(".task__remove").addEventListener('click', e => {
                e.target.closest(".task").remove();
                localStorage.removeItem(key);
            })
        }

    }
}
