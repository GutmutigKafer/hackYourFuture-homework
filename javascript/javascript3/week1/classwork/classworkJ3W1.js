

// Meal ordering website

const orders = [
    {   "order-name" : "Big Mac",
        "order-id" : 1,
        "order-price" : 5.99,
        "list-of-drinks" : ["Coke", "Fanta"],
        "order-extras" : { "cheese" : true, "lettuce" : false, "tomato" : false } 
    },
    {   "order-name" : "Double Cheeseburger",
        "order-id" : 2,
        "order-price" : 6.99,
        "list-of-drinks" : ["Fanta", "Sprite"],
        "order-extras" : [
            { "fries" : false,
              "price" : 1.99,
              "size" : "large"
            }, 
            {"souce" : false,
              "price" : 0.99,
              "size" : "small",
              "taste" : "barbeque"
            }, 
            { "napkins" : false,
              "price" : 0.05,
              "amount" : 2
            }]
    }
]
let ordersJSON = JSON.stringify(orders);
let parsedOrders = JSON.parse(ordersJSON);

// console.log(orders[0]);
// console.log(ordersJSON);
// console.log(parsedOrders[0]["list-of-drinks"]);
// console.log(parsedOrders[0]["order-extras"]);
// console.log(parsedOrders[1]["order-extras"][1]["taste"]);

const astronautsDiv = document.createElement("div");
const dogRandomDiv = document.createElement("div");
const dogBreedDiv = document.createElement("div");

document.body.append(astronautsDiv, dogRandomDiv, dogBreedDiv);

//Astronauts in space (API)
let howMany;
let listOfPeople;
let listItem;

fetch('http://api.open-notify.org/astros.json')
.then(response => response.json())
.then(data => {
// console.log(data);

howMany = document.createElement("h1");
howMany.style.padding = '30px';
howMany.style.fontSize = "22px";
let numberOfPeople = data.people.length;
howMany.innerHTML = `There are ${numberOfPeople} astronauts in space, they are:`; 
listOfPeople = document.createElement("ul");
listOfPeople.style.paddingLeft = '30px';
for (let one of data.people) {
    listItem = document.createElement("li");
    listItem.innerHTML = one.name;
    listItem.style.fontSize = "18px";
    listItem.style.listStyleType = "none";
    listOfPeople.appendChild(listItem);
};
astronautsDiv.appendChild(howMany);
astronautsDiv.appendChild(listOfPeople);
});


// Dog lovers (API)
let dogImg = document.createElement('img')
dogImg.style.height = '300px';
const dogFetchFunction = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(dogsData => {
        if (dogImg.src !== "") {dogRandomDiv.removeChild(dogImg)}
        dogRandomDiv.appendChild(dogImg);
        dogImg.src = dogsData.message;
    });
}
dogFetchFunction();
setInterval(() => {
    dogFetchFunction();
}, 2000);

let generateLink;
let randomDog;

fetch("https://dog.ceo/api/breeds/list/all")
.then(response => response.json())
.then(allDogsList => {
let listAllDogsObject = allDogsList.message;
let listAllDogs = Object.keys(listAllDogsObject);
randomDog = listAllDogs[Math.floor(Math.random() * listAllDogs.length)];


fetch(`https://dog.ceo/api/breed/${randomDog}/images/random`)
.then(response => response.json())
.then(data => {
    let imgRandomDog = document.createElement('img');
    imgRandomDog.src = data.message;
    imgRandomDog.style.height = '300px';
    dogBreedDiv.append(imgRandomDog);
    let dogBreed = document.createElement('h4');
    dogBreed.innerHTML = randomDog;
    dogBreedDiv.appendChild(dogBreed);
});
});




