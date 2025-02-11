
//Candy Helper

boughtCandyPrices = [];

candyPrices = [
    {candyType: "Sweet", pricePerGram: 0.5},
    {candyType: "Chocolate", pricePerGram: 0.7},
    {candyType: "Toffee", pricePerGram: 1.1},
    {candyType: "Chewing-gum", pricePerGram: 0.03}

]
function addCandy(candyType, weight) {

let found = false;

    for (let i = 0; i < candyPrices.length; i++){

        if (candyType === candyPrices[i].candyType){
            let candySum = Math.round(weight * candyPrices[i].pricePerGram);
            boughtCandyPrices.push(candySum);
            found = true
        }
    }
    if (!found) {
        console.log("Please choose an existing candy type")
        }

    return boughtCandyPrices;

}

console.log(addCandy("Chocolate", 300));
console.log(addCandy("Toffee", 50));
console.log(addCandy("Sweet", 20));
console.log(addCandy("Chewing-gum", 110));
console.log(addCandy("Gelly-beans", 210));

console.log(boughtCandyPrices);

const amountToSpend = Math.round(Math.random() * 1000);
let moneySpent = 0;
function canBuyMoreCandy() {
   let i = 0;
    while (i < boughtCandyPrices.length) {

         moneySpent += boughtCandyPrices[i];
        i++;
    }
    return moneySpent < amountToSpend;
}

if (canBuyMoreCandy()){
    console.log(`You can buy more, so please do! You have ${amountToSpend - moneySpent} kroner left!`)
} else {

    console.log("Enough candy for you!");
}
console.log("---------------------");
console.log(`Amount to spend ${amountToSpend}`);
console.log(`Money spent ${moneySpent}`);