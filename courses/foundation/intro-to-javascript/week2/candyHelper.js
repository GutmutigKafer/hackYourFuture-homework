//Candy Helper

const boughtCandyPrices = [];
const candyPrices = [
  { candyType: "Sweet", pricePerGram: 0.5 },
  { candyType: "Chocolate", pricePerGram: 0.7 },
  { candyType: "Toffee", pricePerGram: 1.1 },
  { candyType: "Chewing-gum", pricePerGram: 0.03 },
];

const addCandy = (candyType, weight) => {
  if (candyPrices.every((candy) => !Object.values(candy).includes(candyType)))
    return `Please choose an existing candy type`;

  for (const candy of candyPrices) {
    if (candyType === candy.candyType) {
      const candySum = Math.round(weight * candy.pricePerGram);
      const boughtCandy = { candyType: candy.candyType, price: candySum };
      boughtCandyPrices.push(boughtCandy);
    }
  }
  return (
    "You bought these candies:" +
    Object.values(boughtCandyPrices).map(
      (candy) => ` ${candy.candyType} for ${candy.price}kr`
    )
  );
};

console.log(addCandy("Chocolate", 300));
console.log(addCandy("Toffee", 50));
console.log(addCandy("Sweet", 20));
console.log(addCandy("Chewing-gum", 110));
console.log(addCandy("Gelly-beans", 210));

console.log(boughtCandyPrices);

const amountToSpend = Math.round(Math.random() * 1000);
const moneySpent = Object.values(boughtCandyPrices).reduce(
  (acc, one) => acc + one.price,
  0
);
const canBuyMoreCandy = () => {
  const moneyLeft = amountToSpend - moneySpent;
  const canBuyMore = moneySpent < amountToSpend;
  return canBuyMore
    ? `You can buy more, so please do! You have ${moneyLeft} kroner left!`
    : `Enough candy for you!`;
};
console.log(canBuyMoreCandy());
console.log("---------------------");
console.log(`Amount to spend ${amountToSpend}`);
console.log(`Money spent ${moneySpent}`);
