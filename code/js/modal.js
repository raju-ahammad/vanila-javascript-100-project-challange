const modalBtn = document.querySelector(".modal-btn")
const toggle = document.querySelector(".toggle")
const toggleBtn = document.querySelector(".toggle-btn")
const tog = document.querySelector(".tog")

modalBtn.addEventListener("click", function(){
    if (toggle.classList.contains("hid")){
        toggle.classList.remove("hid")
    }
})

toggleBtn.addEventListener("click", function(){
    if (tog.classList.contains("hid")){
        tog.classList.remove("hid")
    }
    else{
        toggle.classList.add("hid")
    }
})