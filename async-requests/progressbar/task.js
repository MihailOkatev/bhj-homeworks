'use strict'

function upload() {
    const form = document.getElementById('form');
    form.addEventListener('submit', (event) => {
        const formData = new FormData(form);
        const progressBar = document.getElementById('progress');
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true);
        xhr.upload.onprogress = function(pe) {
            if(pe.lengthComputable) {
                progressBar.max = pe.total;
                progressBar.value = pe.loaded;
            }
        }


        xhr.upload.onerror = function(){
            alert('Произошла ошибка при загрузке данных на сервер!');
            location.reload();
        }
        xhr.send(formData);
        event.preventDefault();
    });
};

document.addEventListener('DOMContentLoaded', upload);