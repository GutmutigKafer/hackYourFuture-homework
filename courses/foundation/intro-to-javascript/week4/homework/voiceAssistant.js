let currentName = "";
let helloCount = 0;
const toDoList = [];

const getReply = (command) => {
  const commandLower = command.toLowerCase();
  if (commandLower.includes("hello") || commandLower.includes("my name is"))
    return helloReply(command);
  if (commandLower.includes("what is my name")) return whatName();
  if (commandLower.includes("add") || commandLower.includes("to my todo"))
    return addToDo(command);
  if (commandLower.includes("remove") || commandLower.includes("from my todo"))
    return removeToDo(command);
  if (
    commandLower.includes("what is on") ||
    commandLower.includes("on my todo")
  )
    return whatsOnToDo();
  if (
    commandLower.includes("what day") ||
    commandLower.includes("date") ||
    commandLower.includes("today")
  )
    return whatDay();
  if (commandLower.includes("what is")) return simpleMath(command);
  if (
    commandLower.includes("set a timer") ||
    commandLower.includes("timer for")
  )
    return setTimer(command);
};

const helloReply = (command) => {
  const newName = command.split(" ").pop();
  if (newName === currentName) helloCount++;
  currentName = newName;
  return `${helloCount ? "Hello again" : "Nice to meet you"} ${currentName}`;
};

const whatName = () => {
  return currentName ? `Your name is ${currentName}` : "I don't know your name";
};

const getTaskName = (command, start) => {
  const allWords = command.split(" ");
  const task = allWords.slice(1, allWords.indexOf(start)).join(" ");
  if (!task) return `Please enter valid command (add to/ remove from)`;
  const taskUpper = task.charAt(0).toUpperCase() + task.slice(1).trim();
  return taskUpper;
};

const addToDo = (command) => {
  const taskName = getTaskName(command, "to");
  if (toDoList.includes(taskName)) return `This task is already on the list!`;
  toDoList.push(taskName);
  return `~${taskName}~ added to your ToDo list`;
};

const removeToDo = (command) => {
  const taskName = getTaskName(command, "from");
  if (!toDoList.includes(taskName)) return `This task is not on the list!`;
  toDoList.splice(toDoList.indexOf(taskName), 1);
  return `Removed ~${taskName}~ from your ToDo list`;
};

const whatsOnToDo = () => {
  if (!toDoList) return `There is nothing on your ToDo list`;
  const listLength = toDoList.length;
  return `You have ${listLength} ToDo's on the list: ${
    listLength === 2 ? toDoList.join(" and ") : toDoList.join(", ")
  }`;
};

const whatDay = () => {
  const todayDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const [month, day, year] = todayDate
    .toLocaleDateString("en", options)
    .replaceAll(",", "")
    .split(" ");
  return `Today is ${day} of ${month} ${year}`;
};

const simpleMath = (command) => {
  const allWords = command.split(" ");
  const expression = allWords.slice(2).join(" ");
  const validSymbols = /^[\d+\-*/() ]+$/;
  return validSymbols.test(expression)
    ? eval(expression)
    : `Please enter a valid expression`;
};

const setTimer = (command) => {
  const allWords = command.split(" ");
  const timeNumber = allWords.slice(allWords.indexOf("for") + 1, -1);
  const timeWord = allWords.pop().toLowerCase();
  let multiplier = 1;

  if (timeWord.includes("sec")) {
    multiplier = 1000;
  } else if (timeWord.includes("min")) {
    multiplier = 60000;
  } else if (timeWord.includes("hour")) {
    multiplier = 360000;
  } else return `Please enter correct time interval (sec/min/hour)`;
  const timerDuration = timeNumber * multiplier;
  const doneTimer = () => {
    console.log(`Timer done`);
  };

  setTimeout(doneTimer, timerDuration);

  return `Timer set for ${timeNumber} ${timeWord}`;
};

console.log(getReply("Hello, my name is Vlad"));
console.log(getReply("Hello, my name is Vlad"));
console.log(getReply("What is my name?"));
console.log(getReply("Add playing to my todo list"));
console.log(getReply("Add coding to my todo list"));
console.log(getReply("Add cleaning to my todo list"));
console.log(getReply("Remove playing from my todo list"));
console.log(getReply("tell me what is on my todo list"));
console.log(getReply("what day is it today?"));
console.log(getReply("what is 3 * 6"));
console.log(getReply("what is (3 + 6) * 10"));
console.log(getReply("set timer for 3 seconds"));
