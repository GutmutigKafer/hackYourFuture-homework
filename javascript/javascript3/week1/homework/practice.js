function isTriangle(a, b, c) {
  const side1 = a < b + c;
  const side2 = b < a + c;
  const side3 = c < a + b;

  return side1 && side2 && side3;
}

// console.log(isTriangle(1, 2, 2));

let a = 4;
let b = 3;
let c = 2;

let arr = [a, b, c];

let result = arr.every((one) => arr.reduce((sum, x) => sum + x, 0) - one > one);
// console.log(result);

function findMissingLetter(array) {
  let prevLetter = array[0].charCodeAt(0);
  for (let one in array) {
    let thisLetter = array[one].charCodeAt(0);
    if (thisLetter - prevLetter > 1) {
      return String.fromCharCode(prevLetter + 1);
    }
    prevLetter = thisLetter;
  }
}

// console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
// console.log(findMissingLetter(["O", "Q", "R", "S"]));

function divisors(integer) {
  let divisorsArr = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      divisorsArr.push(i);
    }
  }
  return divisorsArr[0] ? divisorsArr : `${integer} is prime`;
}

/**
 *
 * @param {*} m The given big number
 * @param {*} n The amount of times the 1^3 + 2^3 + 3^3 + ... + n^3
 */

function findNb(m) {
  const toQuadraticBase = Math.sqrt(Math.abs(m)) * 2 * -1;
  if (toQuadraticBase % 1 === 0) {
    console.log(toQuadraticBase);
    // n^2 + n - toQuadraticBase = 0
    const discriminant = 1 - 4 * toQuadraticBase;
    console.log(discriminant);
    // Quadratic formula to find only positive N
    const n = (Math.sqrt(Math.abs(discriminant)) - 1) / 2;
    console.log(n);
    return n;
  } else {
    return -1;
  }
}

// console.log(findNb(1071225));
// console.log(findNb(4183059834009));

function isPrime(num) {
  if (num <= 1) return false; // 1 and less are not prime
  if (num === 2) return true; // 2 is the only even prime number
  if (num % 2 === 0) return false; // all other even numbers are not prime

  const sqrtNum = Math.sqrt(num);
  for (let i = 3; i <= sqrtNum; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// console.log(isPrime(2));
// console.log(isPrime(15));
// console.log(isPrime(29));
// console.log(isPrime(1923));
// console.log(isPrime(19453446424564575683423));
// console.log(isPrime(871987978098745348678464245645745756865431));

// isPrime 2

function isPrime2(num) {
  //   if (num >= 2) if (num !== 2) if (num % 2 === 0) {
  //     return false;
  //   } else {
  //     return false;
  //   } else {
  //     return true;
  //   }

  let primeLoop = (num) => {
    for (let i = 3; i <= Math.sqrt(num); i += 2)
      if (num % i === 0) return false;
    return true;
  };
  //   return primeLoop(num);

  //   return num === 2 || (num >= 2 && num % 2 !== 0 && primeLoop(num));
  if (num === 2) {
    return true;
  }
  if (num < 2 || num % 2 === 0) {
    return false;
  }
  return primeLoop(num);
}

// console.log(`${isPrime2(2)} : true`);
// console.log(`${isPrime2(9)} : false`);
// console.log(`${isPrime2(15)} : false`);
// console.log(`${isPrime2(29)} : true`);
// console.log(`${isPrime2(1923)} : false`);
// console.log(`${isPrime2(946457457583)} : false`);

async function asyncFunc() {
  const response = await fetch(
    "https://raw.githubusercontent.com/GutmutigKafer/gutmutigkafer.github.io/refs/heads/main/movieapp-data/movies-listt.json"
  );
  if (response.status !== 200) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

asyncFunc()
  .then((data) => {
    // console.log("resolved", data[0]);
  })
  .catch((error) => {
    // console.log("rejected", error.message);
  });

let dd = 1132 % 1000;
// console.log(dd);

//   let numArr = [...num.toString()];
//   let resultArr = [];
//   for (let i = 0; i < numArr.length; i++) {
//     let mult = numArr.length - i - 1;
//     if (numArr[i] !== "0") {
//       for (let j = 0; j < mult; j++) {
//         numArr[i] += "0";
//       }
//       resultArr.push(numArr[i]);
//     }
//   }
//   return resultArr.join(" + ");
// }

function expandedForm(num) {
  const str = num.toString();
  return str
    .split("")
    .map((n, i) => {
      return n !== "0" ? n + "0".repeat(str.length - i - 1) : "";
    })
    .filter(Boolean)
    .join(" + ");
}
// console.log(expandedForm(12));
// console.log(expandedForm(42));
// console.log(expandedForm(70304));

function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let count = 1;
    for (
      let result = h * bounce;
      result > window;
      result *= bounce, count += 2
    );
    return count;
  }
  return -1;
}

// console.log(bouncingBall(3.0, 0.66, 1.5));
// console.log(bouncingBall(30.0, 0.66, 1.5));

function spinWords(string) {
  return string
    .split(" ")
    .map((word) => ([...word].length > 4 ? [...word].reverse().join("") : word))
    .join(" ");
}

console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));
