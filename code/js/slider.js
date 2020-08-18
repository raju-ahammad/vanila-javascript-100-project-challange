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
imgContainer.style.width = "100%"
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


// (function() {
//     const pictures = [
//         "bridge.jpg",
//         "field.jpg",
//         "taj.jpg",
//         "tour_1.jpg"
//     ];
  
//     //select both left and right button. Add event listeners
//     const buttons = document.querySelectorAll('.btn')
//     const imageDIV = document.querySelector('.img-container')
//     let counter = 0
  
//     buttons.forEach(function(button){
//       button.addEventListener('click', function(e){
//         if (button.classList.contains('btn-left')){
//           counter--
//           if(counter < 0){
//             counter = pictures.length -1
//           }
//           imageDIV.style.backgroundImage = `url('../img/${pictures[counter]}')`
//         }
//         if (button.classList.contains('btn-right')){
//           counter++
//           if(counter > pictures.length -1){
//             counter = 0
//           }
//           imageDIV.style.backgroundImage = `url('../img/${pictures[counter]}')`
//         }
//       })
//     })
//   })();
