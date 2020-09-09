const modalBtn = document.querySelector(".modal-btn")
const toggle = document.querySelector(".toggle")
const toggleBtn = document.querySelector(".toggle-btn")
const tog = document.querySelector(".tog")

modalBtn.addEventListener("click", function(){
    toggle.classList.remove("hid")
})

toggleBtn.addEventListener("click", function(){
    if (toggle.classList.contains("hid")) {
        toggle.classList.remove("hid")
    }else {
        toggle.classList.add("hid")
    }
    
})