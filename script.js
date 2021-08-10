let key = document.querySelector(".key")
let tool1 = document.querySelector(".toolbox")
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