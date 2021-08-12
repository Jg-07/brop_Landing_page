let key = document.querySelector(".key");
let tool1 = document.querySelector(".toolbox");
let tool2 = document.querySelector(".topbox");
let body = document.querySelector(".body");
let key2 = document.querySelector(".key2");
let i = 0;

key.addEventListener("click", function () {
    if (i % 2 == 0) {
        tool1.classList.add("exp")
        key.classList.add("rot")
    }
    else {
        tool1.classList.remove("exp")
        key.classList.remove("rot")
    }
    i++;
})

key2.addEventListener("click", function () {
    if (i % 2 == 0) {
        tool2.classList.add("exp2")
        body.classList.add("endOverflow")
        key2.classList.add("rot2")
    }
    else {
        tool2.classList.remove("exp2")
        body.classList.remove("endOverflow")
        key2.classList.remove("rot2")
    }
    i++;
})