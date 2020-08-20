const image = document.querySelector(".img");
const name = document.querySelector(".name");
const text = document.querySelector(".txt");
const nextBtn = document.querySelector(".nextBtn")
const prevBtn = document.querySelector(".prevBtn")
let index = 0
const personBio = [];

function Person(img, name, text) {
    this.img = img;
    this.name = name;
    this.text = text;
}

function createPerson(img, name, text) {
    let image = `../img/${img}`;
    let person = new Person(image, name, text);
    personBio.push(person);
}

createPerson("bridge.jpg", "Eanamul", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here")

createPerson("car.jpg", "Kabir", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here")

createPerson("field.jpg", "Raju", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here")

createPerson("london.jpg", "Rony", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here")

createPerson("taj.jpg", "Ratul", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. TThe point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here")

prevBtn.onclick = function() {
    if (index === 0) {
        index = personBio.length
    }
    index --;
    image.src = personBio[index].img
    name.textContent = personBio[index].name
    text.textContent = personBio[index].text

}

nextBtn.onclick = function() {
    if (index === personBio.length) {
        index = 0
    }
    index ++;
    image.src = personBio[index].img
    name.textContent = personBio[index].name
    text.textContent = personBio[index].text

}