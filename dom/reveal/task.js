"use strict";
const elemArr = Array.from(document.querySelectorAll(".reveal"));
document.addEventListener('scroll',e => {
  elemArr.forEach(elem => {
    const viewportHeight = window.innerHeight;
    const elementTop = elem.getBoundingClientRect().top;
    const elemBottom = elem.getBoundingClientRect().bottom;
    if((elementTop > 0 &&  elementTop < viewportHeight) || (elemBottom > 0 && elemBottom < elem.getBoundingClientRect().height)) {
        elem.classList.add("reveal_active");
    } else {
        elem.classList.remove("reveal_active");
    }

  });
});