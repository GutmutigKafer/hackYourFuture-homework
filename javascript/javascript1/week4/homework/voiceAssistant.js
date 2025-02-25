// Voice assistant

let helloCount = 0;
let currentName = "";
let toDoList = [];
function getReply(command) {
  // Hello
  if (
    command.toLowerCase().includes("hello") ||
    command.toLowerCase().includes("my name is")
  ) {
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

  if (command.toLowerCase().includes("what is my name")) {
    if (currentName === "") {
      return "I don't know your name";
    }
    return `Your name is ${currentName}`;
  }

  // Add to ToDo

  if (
    command.toLowerCase().includes("add") ||
    command.toLowerCase().includes("to my todo")
  ) {
    let allWords = command.split(" ");
    let task = allWords.slice(1, allWords.indexOf("to")).join(" ");
    let taskUpper = task.charAt(0).toUpperCase() + task.slice(1).trim();
    toDoList.push(taskUpper);
    return `~${taskUpper}~ added to your ToDo list`;
  }

  // Remove from ToDo

  if (
    command.toLowerCase().includes("remove") ||
    command.toLowerCase().includes("from my todo")
  ) {
    let allWords = command.split(" ");
    let task = allWords.slice(1, allWords.indexOf("from")).join(" ");
    let taskUpper = task.charAt(0).toUpperCase() + task.slice(1).trim();
    for (let i = 0; i < toDoList.length; i++) {
      if (toDoList[i] === taskUpper) {
        toDoList.splice(i, 1);
      }
    }
    return `Removed ~${taskUpper}~ from your ToDo list`;
  }

  // What is on ToDo
  if (
    command.toLowerCase().includes("what is on") ||
    command.toLowerCase().includes("on my todo")
  ) {
    if (toDoList === "") {
      return `There is nothing on your ToDo list`;
    } else {
      let listLength = toDoList.length;
      if (listLength === 1) {
        return `You have ${listLength} ToDo on the list: ${toDoList[0]}`;
      } else if (listLength === 2) {
        return `You have ${listLength} ToDo's on the list: ${toDoList[0]} and ${toDoList[1]}`;
      } else {
        return `You have ${listLength} ToDo's on the list: ${toDoList.join(
          ", "
        )}`;
      }
    }
  }

  // What day is it today

  if (
    command.toLowerCase().includes("what day") ||
    command.toLowerCase().includes("date") ||
    command.toLowerCase().includes("today")
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

  if (command.toLowerCase().includes("what is")) {
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
    command.toLowerCase().includes("set a timer") ||
    command.toLowerCase().includes("timer for")
  ) {
    let allWords = command.split(" ");
    let timeNumber = allWords.slice(allWords.indexOf("for") + 1, -1);
    let timeWord = allWords.slice(-1).join("");
    let calcMultiplier = 1;
    if (timeWord.toLowerCase().includes("sec")) {
      calcMultiplier = 1000;
    } else if (timeWord.toLowerCase().includes("min")) {
      calcMultiplier = 60000;
    } else if (timeWord.toLowerCase().includes("hour")) {
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
}

console.log(getReply("Hello my name is Vlad"));
console.log(getReply("my name is Vlad"));
console.log(getReply("Hello, i am Vlad"));
console.log(getReply("Hi, my name is John"));
console.log(getReply("What is my name?"));
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
console.log(getReply("Set a timer for 4 minutes"));
