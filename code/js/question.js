const qBtn = document.querySelector(".q-btn")
const qText = document.querySelector(".q-text")
qBtn.addEventListener("click", function() {
    if (qText.classList.contains("q-text")) {
        qText.classList.remove("q-text")
    }else {
        qText.classList.add("q-text")
    }
})