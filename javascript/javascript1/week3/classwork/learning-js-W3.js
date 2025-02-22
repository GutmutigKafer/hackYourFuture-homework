// Lesson

const user1 = {

    userName: 'Vlad', 
    age: 25,
    isMentor: false,

}



console.log(user1);

const user2 = {
    userName: 'Maria', 
    age: 32,
    isMentor: true,
    ['100persentGreat!'] : true,
    children: [
        { userName: 'Danny', 
        age: 11,
        isMentor: false,
    },
        {
            userName: 'Donna', 
            age: 9,
            isMentor: false,
        }],

    mom: {
        userName: 'Anna', 
        age: 67,
        isMentor: false,
        ['100persentGreat!'] : true,

        mom: {
            userName: 'Hannah', 
            age: 98,
            isMentor: false,
        }
    }
}


console.log(user2)

user2.livesIn = 'Copenhagen';

console.log(user2)
console.log(user1.userName)

user2.isMentor = null;
console.log(user2)

delete user2.isMentor;
console.log(user2)

console.log(user2['100persentGreat!'])


const mariaLivesIn = user2.livesIn;
console.log(mariaLivesIn)

console.log(user2.mom.mom.userName)


//car

const Car = {

brand: 'Toyota',
model: 'Corolla',
year: '2020',
color: 'red',

}

console.log(Car);
console.log(Car.brand);
console.log(Car.year);

Car.color = 'blue';
Car.isElectric = false;

console.log(Car);

 const winners = ["Michael", "Brian", "Ana", "Ana", "Niels", "Ana", "Brian", "ChatGPT 4.0", "ChatGPT 4.0"];

console.log(countWinners("Ana"));
console.log(countWinners("Brian"));

function countWinners(name) {
    let count = 0;
for (let i = 0; i < winners.length; i++) {
let winner = winners[i];
if (winner === name) {
    count += 1;
}}
return count;
}



function histogram() {
const histo = {};
console.log(histo);
for (let i = 0; i < winners.length; i++) {
    let winner = winners[i];
    console.log(winner);
    if (histo[winner] === undefined) {
        histo[winner] = 1;
    } else {
        histo[winner] += 1;
    }
    
}
return histo;
}

console.log(histogram()) 


//ARRAYS


let arrayOfNumbers = [8, 12, 34, 7, 22];

arrayOfNumbers.push(17);
arrayOfNumbers.unshift(2);

console.log(arrayOfNumbers);

arrayOfNumbers.pop();
arrayOfNumbers.shift();

console.log(arrayOfNumbers);

for (let i = 0; i < arrayOfNumbers.length; i++) {
    console.log(arrayOfNumbers[i]);
}

for (let number of arrayOfNumbers) {
    console.log(number);
}

console.log(arrayOfNumbers.toString());

console.log(arrayOfNumbers.includes(12));



//Fruits

let fruits = ["Apples", "Pear", "Orange"];
console.log(fruits);

// push a new value into the "copy"
let shoppingCart = fruits;
console.log(shoppingCart);

shoppingCart.push("Banana");
console.log(shoppingCart);
console.log(fruits);

// what's in fruits?
console.log(fruits.length); 

// call stack
function wakeUp() {
console.log('I wake up');
}
function brushMyTeeth() {
    console.log('I brush my teeth');
}

function shower() {
    console.log('I shower');
}
function eatBreakfast() {
    pourCereal();
    eat();
}
function pourCereal() {
    console.log('I pour cereal');
}

function eat() {
    console.log('I am eating');
}

function createError() {
    console.error('I am an error');
}


function getReadyForWork() {
    eatBreakfast();
    shower();
    brushMyTeeth();
}
getReadyForWork();
 



//getReadyForWork();




function bookPlaneTickets() {
    // what is stack here?
    console.log("Plane tickets booked");
    requestVacationDays();
  }
  
  function bookHotel() {
    // what is stack here?
    console.log("Hotel booked");
    planItinerary();
  }
  
  function requestVacationDays() {
    // what is stack here?
    console.log("Vacation days requested");
  }
  
  function planItinerary() {
    // what is stack here?
    console.log("Itinerary done");
  }
  
  function planTrip() {
    // what is stack here?
    bookPlaneTickets();
    bookHotel();
    console.log("Trip planned");
  }
   
  // what is stack here?




  const car = {
    brand: "Toyota",
    model: "Corolla",
    horsePower: 300,
    color: "red",
    speed: 10,

    accelerate: function () {
    this.speed += 10;
  }
  }
  console.log(car);
  car.accelerate();
  console.log(car); 


  //METHODS

  const classRoom = {
    className: "07",
    numberOfStudents: 8,
   students: [
     {name: "Vlad Krichman", age: 25, gender: "Male", livesIn: "Copenhagen"},
     {name: "Maria Kristensen", age: 32, gender: "Female", livesIn: "Aarhus"},
     {name: "Anna Vogel", age: 44, gender: "Female", livesIn: "Ballerup"}, 
     {name: "Hannah Jensen", age: 22, gender: "Female", livesIn: "Aalborg"}, 
     {name: "Danny Thomsen", age: 19, gender: "Male", livesIn: "Copenhagen"},
     {name: "Donna Berg", age: 17, gender: "Female", livesIn: "Odense"},
     {name: "Rasmus Peters", age: 19, gender: "Male", livesIn: "Roskilde"},
     {name: "Rune Antonsen", age: 19, gender: "Male", livesIn: "Copenhagen"},
    ],


 exists: function(name) {
    for (let names of this.students) {
        if (names.name === name) {
            return true;
        }
    }
    return false;
 },

addStudent: function(nameOf, ageOf, genderOf, livesInOf) {
    for (let names of this.students) {
        if (names.name === nameOf) {
            return "Student already exists";
        }      
    }
    this.students.push({name: nameOf, age: ageOf, gender: genderOf, livesIn: livesInOf});
 },

  }

console.log(classRoom.addStudent("John Johnson", 25, "Male", "Copenhagen"));
console.log(classRoom.students);






  console.log(classRoom.exists("Vlad Krichman"));