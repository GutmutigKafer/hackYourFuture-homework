// Voice assistant

let helloCount = 0;
let currentName = "";
let toDoList = [];
let listLength = toDoList.length;

function getReply(command) {
  // Hello
  const commandLower = command.toLowerCase();
  if (commandLower.includes("hello") || commandLower.includes("my name is")) {
    let newName = command.split(" ").pop();
    if (newName === currentName) {
      helloCount++;
    } else {
      helloCount = 0;
    }
    currentName = newName;

    if (helloCount === 0) {
      return `Nice to meet you ${currentName}!`;
    } else {
      return `Hello again ${currentName}!`;
    }
  }

  // What name

  if (commandLower.includes("what is my name")) {
    if (currentName === "") {
      return "I don't know your name";
    }
    return `Your name is ${currentName}`;
  }

  // Add to ToDo

  if (commandLower.includes("add") || commandLower.includes("to my todo")) {
    let indexName = "to";
    let taskNameVar = taskName(indexName);
    toDoList.push(taskNameVar);
    return `~${taskNameVar}~ added to your ToDo list`;
  }

  // Remove from ToDo

  if (
    commandLower.includes("remove") ||
    commandLower.includes("from my todo")
  ) {
    let indexName = "from";
    let taskNameVar = taskName(indexName);
    for (let i = 0; i < listLength; i++) {
      if (toDoList[i] === taskNameVar) {
        toDoList.splice(i, 1);
      }
    }
    return `Removed ~${taskNameVar}~ from your ToDo list`;
  }

  // What is on ToDo
  if (
    commandLower.includes("what is on") ||
    commandLower.includes("on my todo")
  ) {
    if (toDoList == "") {
      return `There is nothing on your ToDo list`;
    } else {
      return `You have ${listLength} ToDo's on the list: ${
        listLength === 2 ? toDoList.join(" and ") : toDoList.join(", ")
      }`;
    }
  }

  // What day is it today

  if (
    commandLower.includes("what day") ||
    commandLower.includes("date") ||
    commandLower.includes("today")
  ) {
    let todayDate = new Date();
    let day = new Intl.DateTimeFormat("en", { day: "numeric" }).format(
      todayDate
    );
    let month = new Intl.DateTimeFormat("en", { month: "long" }).format(
      todayDate
    );
    let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
      todayDate
    );

    return `Today is ${day} of ${month} ${year}`;
  }

  // Simple math

  if (commandLower.includes("what is")) {
    let allWords = command.split(" ");
    let expression = allWords.slice(2).join(" ");
    try {
      return eval(expression);
    } catch (error) {
      throw new Error("Not a valid math expression");
    }
  }

  //Set a timer

  if (
    commandLower.includes("set a timer") ||
    commandLower.includes("timer for")
  ) {
    let allWords = command.split(" ");
    let timeNumber = allWords.slice(allWords.indexOf("for") + 1, -1);
    let timeWord = allWords.slice(-1).join("");
    let timeWordLower = timeWord.toLowerCase();
    let calcMultiplier = 1;
    if (timeWordLower.includes("sec")) {
      calcMultiplier = 1000;
    } else if (timeWordLower.includes("min")) {
      calcMultiplier = 60000;
    } else if (timeWordLower.includes("hour")) {
      calcMultiplier = 360000;
    }
    let timerDuration = timeNumber * calcMultiplier;

    function doneTimer() {
      console.log(`Timer done`);
      return `Timer done`;
    }

    setTimeout(doneTimer, timerDuration);

    return `Timer set for ${timeNumber} ${timeWord}`;
  }

  //Additional functions

  function taskName(indexWord) {
    let allWords = command.split(" ");
    let task = allWords.slice(1, allWords.indexOf(indexWord)).join(" ");
    let taskUpper = task.charAt(0).toUpperCase() + task.slice(1).trim();
    return taskUpper;
  }
}

console.log(getReply("Hello my name is Vlad"));
console.log(getReply("my name is Vlad"));
console.log(getReply("Hello, i am Vlad"));
console.log(getReply("Hi, my name is John"));
console.log(getReply("What is my name?"));
console.log(getReply("What is on my todo"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(toDoList);
console.log(getReply("What is on my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(toDoList);
console.log(getReply("What is on my todo"));
console.log(getReply("Add coding-moding to my todo"));
console.log(getReply("what is on"));
console.log(getReply("What day is it today?"));
console.log(getReply("Add cook some food to my todo"));
console.log(getReply("on my todo"));
console.log(getReply("what is 3 * 6"));
console.log(getReply("what is 10.73 * 6.3 / 3.6 - 2.2 + 17.376 % 7.4"));
console.log(getReply("Set a timer for 10 seconds"));
