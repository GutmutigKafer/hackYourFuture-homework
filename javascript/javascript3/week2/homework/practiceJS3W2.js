// Async practice (https://www.w3resource.com/javascript-exercises/asynchronous/)

// 1. Delayed Callback Execution
// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function twoSecTimeout(callback) {
  return setTimeout(callback, 2000);
}

const logHello = () => console.log("Hello");

// twoSecTimeout(logHello);

// 2. Callback to Promise Conversion
// Write a JavaScript program that converts a callback-based function to a Promise-based function.

function readFileCallback(path, callback) {
  setTimeout(() => {
    callback(null, "File content");
  }, 1000);
}

function readFileCallback2(path) {
  return new Promise((resolve, reject) => {
    if (path) {
      setTimeout(() => resolve("File content"), 1000);
    } else {
      reject("Something went wrong");
    }
  });
}
// readFileCallback2("/folder/file")
//   .then((response) => console.log(response))
//   .catch((error) => console.error(error));

//Callback to Promise

function loginUserCallback(email, password, callback) {
  setTimeout(() => {
    if (email && password) {
      callback(null, { user: email, token: "abc123" });
    } else {
      callback("Email/password missing", null);
    }
  }, 1000);
}

function loginUserPromise(email, password) {
  return new Promise((resolve, reject) => {
    loginUserCallback(email, password, (error, result) => {
      if (email && password) {
        resolve(result);
      } else {
        reject(error);
      }
    });
  });
}
// loginUserPromise("hello@email.com", "26172")
//   .then((user) => console.log("Logged in:", user))
//   .catch((error) => console.error("Error:", error));

// HTTP GET Request
const httpGet = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return console.log(`Fetched data`, data);
  } catch (error) {
    console.log("Error:", error.message);
  }
};
httpGet("https://jsonplaceholder.typicode.com/posts/1");
