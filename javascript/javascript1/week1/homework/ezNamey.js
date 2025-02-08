// Ez Namey (Startup name generator)


const firstWords = ["Quantum", "Hyper", "Swift", "Nova", "Cyber", "Stellar", "Aero", "Infinite", "Apex", "Turbo"];
const secondWords = ["Solutions", "Innovations", "Labs", "Systems", "Ventures", "Dynamics", "Tech", "Networks", "Hub", "Cloud"];

const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);

let startupName = firstWords[randomNumber1] + " " + secondWords[randomNumber2];

let startupNameLength = startupName.length;

console.log(`Your new startup name is: ${startupName}. It contains ${startupNameLength} characters`);