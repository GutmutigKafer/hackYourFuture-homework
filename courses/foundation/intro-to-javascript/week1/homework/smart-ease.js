//* Age-ify  (A future age calculator)
const yearOfBirth = 1999;
const yearFuture = 2050;
const age = (birth, future) => {
  console.log(`You will be  ${future - birth} years old in ${future}`);
};
age(yearOfBirth, yearFuture);

//* Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2010;
const dogYearFuture = 2025;
const shouldShowResultInDogYears = true;
const dogYear = (birth, future, isDogYears) => {
  const dogAge = future - birth;
  console.log(
    `Your dog will be ${
      isDogYears ? dogAge * 7 : dogAge
    } dog years old in ${future}`
  );
};
dogYear(dogYearOfBirth, dogYearFuture, shouldShowResultInDogYears);

//* Housey pricey (A house price estimator)
const Peter = {
  name: "Peter",
  width: 8,
  depth: 10,
  height: 10,
  garden: 100,
  price: 2500000,
};
const Julia = {
  name: "Julia",
  width: 5,
  depth: 11,
  height: 8,
  garden: 70,
  price: 1000000,
};

const getRecommendedPrice = (buyer) => {
  const volume = buyer.width * buyer.depth * buyer.height;
  const recommendedPrice = volume * 2.5 * 1000 + buyer.garden * 300;
  const isGoodPrice = recommendedPrice > buyer.price;
  console.log(
    `Recommended price for the house: ${recommendedPrice}. ${
      buyer.name
    } got a ${isGoodPrice ? "Good" : "Bad"} deal!`
  );
};
getRecommendedPrice(Peter);
getRecommendedPrice(Julia);

//* Ez Namey (Startup name generator)
const firstWords = [
  "Quantum",
  "Hyper",
  "Swift",
  "Nova",
  "Cyber",
  "Stellar",
  "Aero",
  "Infinite",
  "Apex",
  "Turbo",
];
const secondWords = [
  "Solutions",
  "Innovations",
  "Labs",
  "Systems",
  "Ventures",
  "Dynamics",
  "Tech",
  "Networks",
  "Hub",
  "Cloud",
];

const getStartupName = (first, second) => {
  const getRandomNumber = () => Math.floor(Math.random() * 10);
  const [number1, number2] = [getRandomNumber(), getRandomNumber()];
  console.log(
    `Your new startup name is: ${first[number1]} ${second[number2]}.`
  );
};
getStartupName(firstWords, secondWords);
