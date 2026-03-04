// A function to add two numbers

function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("Both arguments must be numbers");
  }
  return x + y;
}

function main() {
  console.log("--- add ---");
  console.log(add(2, 3));
  console.log(add(2, "3"));
  console.log(add("2", "3"));
  console.log(add("2", 3));
  console.log(add(2, 3));
}

main();

export { add };
