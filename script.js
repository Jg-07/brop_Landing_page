let key = document.querySelector(".key");
let tool1 = document.querySelector(".toolbox");
let tool2 = document.querySelector(".topbox");
let body = document.querySelector(".body");
let key2 = document.querySelector(".key2");
let key3 = document.querySelector(".key3");
let blur1 = document.querySelector(".blur");
let i = 0;

key.addEventListener("click", function () {
    if (i % 2 == 0) {
        tool1.classList.add("exp")
        blur1.classList.add("display")
        key.classList.add("rot")
    }
    else {
        tool1.classList.remove("exp")
        blur1.classList.remove("display")
        key.classList.remove("rot")
    }
    i++;
})

key2.addEventListener("click", function () {
    if (i % 2 == 0) {
        tool2.classList.add("exp2")
        blur1.classList.add("display")
        body.classList.add("endOverflow")
        key2.classList.add("rot2")
    }
    else {
        tool2.classList.remove("exp2")
        blur1.classList.remove("display")
        body.classList.remove("endOverflow")
        key2.classList.remove("rot2")
    }
    i++;
})

key3.addEventListener('click', function () {
    window.scrollTo({
        top: 650,
        behavior: "smooth",
    })
});