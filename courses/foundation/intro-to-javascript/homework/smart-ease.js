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
  let dogAge = future - birth;
  console.log(
    `Your dog will be ${
      isDogYears ? dogAge * 7 : dogAge
    } dog years old in ${future}`
  );
};
dogYear(dogYearOfBirth, dogYearFuture, shouldShowResultInDogYears);

//* Housey pricey (A house price estimator)
const petersHouse = [8, 10, 10, 100, 2500000];
const juliasHouse = [5, 11, 8, 70, 1000000];

const getRecommendedPrice = (houseProperties) => {
  const [width, depth, height, garden, price] = houseProperties;
  const volume = width * depth * height;
  const recommendedPrice = volume * 2.5 * 1000 + garden * 300;
  const isGoodPrice = recommendedPrice > price;
  console.log(
    `Recommended price for the house: ${recommendedPrice}. You got a ${
      isGoodPrice ? "Good" : "Bad"
    } deal!`
  );
};
getRecommendedPrice(petersHouse);
getRecommendedPrice(juliasHouse);

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
