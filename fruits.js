let fruits = [{ name: "Orange", image: "orange.jpg" }, { name: "Kiwi", image: "kiwi.jpg" }, { name: "Banane", image: "banane.jpg" }, { name: "Peche", image: "peche.jpg" }, { name: "Cerise", image: "cerise.jpg" }];

const imageBlock = document.querySelector("#imageFruit");
const boutonBlock = document.querySelector("#fruits");
fruits.forEach(fruit => {
    const divElement = document.createElement("div");
    divElement.textContent = fruit.name;
    divElement.className = "boutonFruits";
    boutonBlock.appendChild(divElement);

    //divElement.addEventListener = 


})








