const pictures = [
    "bridge.jpg",
    "field.jpg",
    "taj.jpg",
    "tour_1.jpg",
    "london.jpg"
];


const imgContainer = document.querySelector(".img-container")
const leftButton = document.querySelector(".l-btn")
const rightButton = document.querySelector(".r-btn")

imgContainer.style.backgroundImage = `url('../img/london.jpg')`

let counter = 0;


leftButton.onclick = function() {
    counter --;
    if (counter < 0) {
        counter = pictures.length - 1;
    }
    imgContainer.style.backgroundImage = `url('../img/${pictures[counter]}')`
}

rightButton.onclick = function () {
    counter ++;
    if (counter > pictures.length - 1) {
        counter = 0
    }
    imgContainer.style.backgroundImage = `url('../img/${pictures[counter]}')`
}

