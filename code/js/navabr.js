const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")
const nav = document.querySelector(".nav")
navToggle.addEventListener("click", function() {
    if (links.classList.contains("show")) {
        links.classList.remove("show")
        nav.style.height = "auto"
    }
    else {
        links.classList.add("show")
        nav.style.height = "100px"


    }
})
