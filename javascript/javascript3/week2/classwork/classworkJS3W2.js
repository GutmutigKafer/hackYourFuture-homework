//Creation of promise

const myPromise = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("Work successfull!");
  } else {
    reject("Something went wrong!");
  }
});

//Consumption of promise

myPromise
  .then((result) => {
    // console.log(result);
  })
  .catch((error) => {
    // console.log(error);
  });

fetch("https://yesno.wtf/api").then((response) => response.json());
//   .then((data) => console.log(data.answer));

fetch("https://knajskdskj.jasdk")
  .then((response) => response.json())
  .catch((error) => {
    // console.log(error);
  });

function fourSecondPromise() {
  return new Promise((resolve, reject) => {
    let value = true;
    if (value) {
      setTimeout(() => {
        resolve("Hello World");
      }, 2000);
    } else {
      reject("Something went wrong");
    }
  });
}

// fourSecondPromise();
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

async function fetchData() {
  try {
    let result = await fetch("https://yesno.wtf/api");
    let jsonFromResult = await result.json();
    //   .then((response) => response.json())
    let data = await jsonFromResult.answer;
    return data;
    // console.log(data);
    //   .then((data) => console.log("From Then:", data.answer));
    // console.log("Not called until after await");
    // console.log("Result:", data);
  } catch (error) {
    // console.log(error);
    return error;
  }
}
// fetchData();

// Promise.all([fetchData(), fourSecondPromise()])
//   .then((responses) => console.log(responses))
//   .catch((err) => console.log("Error with one of the promises", err));

// function YesNoFail4Seconds() {
//   return new Promise((resolve, reject) => {
//     let random = Math.floor(Math.random() * 10);
//     setTimeout(() => {
//       if (random < 4) {
//         resolve("Yes");
//       } else if (random > 6) {
//         resolve("No");
//       } else {
//         reject("Something went wrong");
//       }
//     }, 2000);
//   });
// }

// YesNoFail4Seconds()
//   .then((data) => {
//     // console.log(`The answer is ${data}`);
//   })
//   .catch((error) => {
//     // console.log(error);
//   });

Promise.all([
  fetch("http://api.open-notify.org/astros.json"),
  fetch(
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
  ),
]).then((responses) => {
  let moviesOnly = responses[1].json().then((res) => console.log(res));
  let astronautsOnly = responses[0].json().then((res) => console.log(res));
});
