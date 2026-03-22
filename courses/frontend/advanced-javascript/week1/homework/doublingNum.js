const doublingNum = (array) => {
  return array
    .filter((one) => one % 2 !== 0 && Number.isInteger(one))
    .map((odd) => odd * 2);
};

const testArrays = [
  [1, 2, 3, 4],
  [9, 8, 7, 6],
  [10, 15, 20, 30, 35, 55],
  [0, 1, 2, 0, 7],
  ["a", 4, [0], undefined],
];

testArrays.forEach((arr) => console.log(doublingNum(arr)));
