"use strict";
let activeTask = [];
let n = 1;
const taskField = document.getElementById('task__input')
const addTaskButton = document.getElementById("tasks__add");
const deleteTask = document.createElement('a');
const taskList = document.getElementById("tasks__list");
console.log(taskField);
let newTask = document.createElement('div');
let taskTitle = document.createElement('div');
addTaskButton.addEventListener('click', e=>{
    e.preventDefault();
    addTask();

});
function addTask() {
    if(n === 1) {
        newTask.classList.add("task");
        newTask.setAttribute("data-number", String(n));
        taskTitle.classList.add("task__title");
        deleteTask.classList.add("task__remove");
        deleteTask.innerHTML = "&times;";
        deleteTask.addEventListener('click', e => {
           e.target.closest(".task").remove();
        });
        taskList.append(newTask);
        taskTitle.textContent = taskField.value;
        newTask.append(taskTitle);
        newTask.append(deleteTask);
        activeTask.push({task: newTask, number: n + 1});
        console.log(activeTask);
    } else {
        let otherTask = newTask.cloneNode(true);
        otherTask.querySelector(".task__title").textContent = taskField.value;
        let all = Array.from(document.querySelectorAll(".task"));
        all[all.length - 1].after(otherTask);
    }
     n++;
    taskField.value = "";
    localStorage.clear();
    saveElem();



}

function saveElem() {
    localStorage.setItem('toDoList',taskList);
}

function getList() {
    taskList.replaceWith(localStorage.getItem('toDoList'));
}