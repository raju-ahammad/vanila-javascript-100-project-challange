
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn")
const counter = document.querySelector('#counter')

let count = 0;
prevBtn.onclick = function() {
    count --;
    counter.textContent = count;
} 
nextBtn.onclick = function() {
    count ++;
    counter.textContent = count;
}
