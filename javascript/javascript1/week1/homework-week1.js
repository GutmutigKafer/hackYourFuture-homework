// Age-ify  (A future age calculator)

const yearOfBirth = 1999;
let yearFuture = 2050;
let age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);

// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2010;
let dogYearFuture = 2025;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears === true) {
    console.log(`Your dog will be ${dogYear * 7} dog years old in ${dogYearFuture}`);
}
else {
    console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);
}


// Housey pricey (A house price estimator)



let houseWidth = 12;
let houseDepth = 15;
let houseHeight = 10;
let gardenSizeInM2 = 100;
let realHousePrice = 2500000;

let volumeInMeters = houseWidth * houseDepth * houseHeight;

let recommendedHousePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (realHousePrice > recommendedHousePrice) {
    console.log("This is the recommended house price: " + recommendedHousePrice + " and Your house is too expensive");
}
else {
    console.log("Your house is cheaper than: " + recommendedHousePrice + " Which is a recommended house price");
}

// Ez Namey (Startup name generator)


const firstWords = ["Quantum", "Hyper", "Swift", "Nova", "Cyber", "Stellar", "Aero", "Infinite", "Apex", "Turbo"];
const secondWords = ["Solutions", "Innovations", "Labs", "Systems", "Ventures", "Dynamics", "Tech", "Networks", "Hub", "Cloud"];

const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);

let startupName = firstWords[randomNumber1] + " " + secondWords[randomNumber2];

console.log(startupName);