const squareOrSquareRoot = (array) => {
  return array.map((one) => {
    const sqrt = Math.sqrt(one);
    return Number.isInteger(sqrt) ? sqrt : Math.pow(one, 2);
  });
};

// console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));

const removeEveryOther = (arr) => arr.filter((_, i) => i % 2 === 0);

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
