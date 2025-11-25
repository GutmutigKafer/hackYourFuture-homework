//FIB
const fib = (num) => {
  let [fib1, fib2] = [0, 1];
  for (let i = 2; i <= num; i++) {
    [fib1, fib2] = [fib2, fib1 + fib2];
  }
  return fib1;
};

// console.log(fib(5));

//Event hours

// 🏪 STORE OPENING HOURS - EXERCISE
//====================================

const opening_hours = [
  {
    day: "Saturday",
    open: 10,
    close: 16,
  },
  {
    day: "Sunday",
    open: "Closed",
    close: "Closed",
  },
  {
    day: "Monday",
    open: 9,
    close: 19,
  },
  {
    day: "Tuesday",
    open: 9,
    close: 19,
  },
  {
    day: "Wednesday",
    open: 9,
    close: 19,
  },
  {
    day: "Thursday",
    open: 9,
    close: 19,
  },
  {
    day: "Friday",
    open: 9,
    close: 20,
  },
];

// ========================================
// EXERCISE 1: Get Opening Hours for a Day
// ========================================

/*
EXAMPLE:
getOpeningHours("Monday") 
Should return: { day: "Monday", open: "09:00", close: "19:00" }
*/

const getOpeningHours = (day) => {
  for (const one of opening_hours) {
    if (one.day === day) return one;
  }
  return "Enter valid day";
};

// console.log(getOpeningHours("Monday"));
// ========================================
// EXERCISE 2: Check If Store Is Open
// ========================================
/*
EXAMPLE:
isOpenNow("Monday", "10") // "open"
isOpenNow("Monday", "20") // "closed"
isOpenNow("Friday", "18") // "open"
isOpenNow("Sunday", "11") // "closed"
*/

const isOpenNow = (day, time) => {
  for (const one of opening_hours) {
    if (one.day === day) {
      return one.open <= time && one.close >= time ? "open" : "closed";
    }
  }
  return "Enter valid day";
};
// console.log(isOpenNow("Sunday", "11"));

// ========================================
// EXERCISE 3: Special Event Hours
// ========================================
/*
TASK: During special events, the store opens 1 hour earlier and closes 1 hour later.
Create a function that checks if the store is open considering special events.

INPUT: 
  - day (string): Day name
  - time (string): Time in format "HH:MM"
  - isSpecialEvent (boolean): true if there's a special event
*/

const isOpenWithEvent = (day, time, event) => {
  for (const one of opening_hours) {
    if (one.day === day) {
      const validTime = one.open - event <= time && one.close + event > time;
      if (day === "Sunday" && event) return "open";
      return validTime ? "open" : "closed";
    }
  }
  return "Enter valid day";
};
// console.log(isOpenWithEvent("Monday", "8", false));
// console.log(isOpenWithEvent("Friday", "21", true));
// console.log(isOpenWithEvent("Sunday", "15", true));

// console.log(isOpenWithEvent("Monday", "8", false)); // "closed"
// console.log(isOpenWithEvent("Monday", "8", true));  // "open"
// console.log(isOpenWithEvent("Friday", "21", true));  // "closed"

const fizzBuzz = (n1, n2) => {
  for (let i = 1; i <= 100; i++) {
    if (i % n1 === 0) {
      if (i % n2 === 0) console.log("FizzBuzz");
      console.log("Fizz");
    } else if (i % n2 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
// console.log(fizzBuzz(3, 5));

const positive = new Set([
  "awesome",
  "happy",
  "super",
  "great",
  "amazing",
  "love",
  "brilliant",
  "fantastic",
  "incredible",
]);

const negative = new Set([
  "hate",
  "terrible",
  "awful",
  "sad",
  "bad",
  "horrible",
  "disgusting",
]);

const getSentimentScore = (str) => {
  let score = 0;
  const usedPositive = [];
  const usedNegative = [];
  const array = str.toLowerCase().split(/[,!. ]/);
  for (const one of array) {
    if (negative.has(one)) {
      score--;
      usedNegative.push(one);
    }
    if (positive.has(one)) {
      score++;
      usedPositive.push(one);
    }
  }
  return {
    score,
    usedPositive,
    usedNegative,
  };
};

// console.log(getSentimentScore("I am mega super awesome happy"));
// console.log(
//   getSentimentScore(
//     "What a horrible, disgusting, but still super incredible show"
//   )
// );

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const encrypted = (text, step) => {
  const result = [];
  for (const i of text) {
    let indx = alphabet.indexOf(i.toLowerCase());
    let newIndx = indx + step;
    if (newIndx >= 26) {
      result.push(alphabet[Math.round(newIndx % 26)]);
    } else {
      result.push(alphabet[newIndx]);
    }
  }
  return result.join("");
};

// console.log(encrypted("famita", 87)); // gbnjub
// console.log(encrypted("Annamai", 32)); // booanaoj
console.log(
  encrypted("Ifmmp ufan33, zpvs asf po njttjpo up mfaso kawatdsjqu", 25)
); // booanaoj
