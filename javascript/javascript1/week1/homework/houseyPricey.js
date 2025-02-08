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


/* I'm not sure if i understood the comment about this part. Why add another example when it's possible to change values in the first one?*/

let houseWidthJulia = 5;
let houseDepthJulia = 11;
let houseHeightJulia = 8;
let gardenSizeInM2Julia = 70;
let realHousePriceJulia = 1000000;

let volumeInMetersJulia = houseWidthJulia * houseDepthJulia * houseHeightJulia;

let recommendedHousePriceJulia = volumeInMetersJulia * 2.5 * 1000 + gardenSizeInM2Julia * 300;

if (realHousePriceJulia > recommendedHousePriceJulia) {
    console.log("This is the recommended house price: " + recommendedHousePriceJulia + " and Your house is too expensive");
}
else {
    console.log("Your house is cheaper than: " + recommendedHousePriceJulia + " Which is a recommended house price");
}