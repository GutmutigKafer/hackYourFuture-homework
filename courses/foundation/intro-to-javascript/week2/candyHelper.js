//Candy Helper

const boughtCandyPrices = [];
const amountToSpend = Math.round(Math.random() * 1000);
let moneySpent = 0;
const candyPrices = {
  Sweet: 0.5,
  Chocolate: 0.7,
  Toffee: 1.1,
  "Chewing-gum": 0.03,
};

const addCandy = (candyType, weight) => {
  if (!(candyType in candyPrices))
    return `Please choose an existing candy type`;

  const candy = candyPrices[candyType];
  const candySum = Math.round(weight * candy);
  const boughtCandy = { candyType, price: candySum };
  moneySpent += candySum;
  boughtCandyPrices.push(boughtCandy);
  return (
    "You bought these candies:" +
    Object.values(boughtCandyPrices).map(
      (candy) => ` ${candy.candyType} for ${candy.price}kr`
    ) +
    `\n${canBuyMoreCandy()}`
  );
};

const canBuyMoreCandy = () => {
  const moneyLeft = amountToSpend - moneySpent;
  const canBuyMore = moneySpent < amountToSpend;
  return canBuyMore
    ? `You can buy more, so please do! You have ${moneyLeft} kroner left! You spent ${moneySpent}kr\n`
    : `Enough candy for you!\n`;
};

console.log(addCandy("Chocolate", 300));
console.log(addCandy("Toffee", 50));
console.log(addCandy("Sweet", 20));
console.log(addCandy("Chewing-gum", 110));
console.log(addCandy("Gelly-beans", 210));
