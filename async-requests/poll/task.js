const poll = document.querySelector(".poll");
document.addEventListener("DOMContentLoaded", () => {
    let request = new XMLHttpRequest();
    request.open("Get", " https://netology-slow-rest.herokuapp.com/poll.php");
    request.send();
    request.addEventListener("readystatechange", () => {
        console.log(request.readyState);
        console.log(request.status);
        if (request.readyState === 4) {
            if (request.status === 200) {
                let serverAnswer = JSON.parse(request.responseText);
                console.log(serverAnswer);
                let question = serverAnswer.data;
                console.log(question);
                poll.innerHTML += `<div class="poll__title" id="poll__title">${question.title}</div>`
                question.answers.forEach(elem => {
                    let newBtn = document.createElement("button")
                    newBtn.classList.add("poll__answer");
                    newBtn.textContent = elem;
                    poll.append(newBtn);
                    newBtn.addEventListener("click", e => {
                        alert("Спасибо, ваш голос засчитан!");
                    });
                })

            } else {
                poll.innerHTML += `<p style="color:red">Что-то пошло не так</p>`

            }
        }
    })
});