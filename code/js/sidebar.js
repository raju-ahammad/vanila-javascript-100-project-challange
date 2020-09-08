const toggle = document.querySelector(".toggle")
const links = document.querySelector(".links")
const dropToggle = document.querySelector(".drop-toggle")
const dropLink = document.querySelector(".drop-links")


toggle.addEventListener("click", function() {
    
    if (links.classList.contains("hid")) {
        links.classList.remove("hid")
        toggle.classList.add("trans")
    }
    else {
        links.classList.add("hid")
        toggle.classList.remove("trans")
    }
})

dropToggle.addEventListener("click", function() {
    if (dropLink.classList.contains("drop-hide")) {
        dropLink.classList.remove("drop-hide")
    }
    else {
        dropLink.classList.add("drop-hide")
    }
})

