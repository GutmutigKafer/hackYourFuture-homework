const userData = {
  currentName: "",
  toDoList: [],
};

const getReply = (command) => {
  if (!command.trim()) return `Please enter a valid command`;
  const commandLower = command.toLowerCase();
  if (commandLower.includes("hello my name is")) return helloReply(command);
  if (commandLower.includes("my name")) return whatName();
  if (commandLower.includes("add")) return addToDo(command);
  if (commandLower.includes("remove")) return removeToDo(command);
  if (commandLower.includes("on my todo")) return whatsOnToDo();
  if (commandLower.includes("what day is it today")) return whatDay();
  if (commandLower.includes("what is")) return simpleMath(command);
  if (commandLower.includes("set a timer for")) return setTimer(command);

  return `Please enter a valid command`;
};

const helloReply = (command) => {
  const newName = command.slice(command.indexOf("is ") + 3).trim();
  if (!newName.trim()) return `Please enter a valid name`;
  if (newName === userData.currentName)
    return `Hello again ${userData.currentName}`;
  else {
    userData.currentName = newName;
    return `Nice to meet you ${userData.currentName}`;
  }
};

const whatName = () => {
  return userData.currentName
    ? `Your name is ${userData.currentName}`
    : "I don't know your name";
};

const getTaskName = (command, start) => {
  const allWords = command.toLowerCase().split(" ");
  const task = allWords
    .slice(allWords.indexOf(start) + 1, allWords.indexOf("my todo") - 3)
    .join(" ");
  console.log(task);
  if (!task) return `Please enter valid command (add to/ remove from)`;
  const taskUpper = task.charAt(0).toUpperCase() + task.slice(1).trim();
  return taskUpper;
};

const addToDo = (command) => {
  const taskName = getTaskName(command, "add");
  if (userData.toDoList.includes(taskName))
    return `This task is already on the list!`;
  userData.toDoList.push(taskName);
  return `~${taskName}~ added to your ToDo list`;
};

const removeToDo = (command) => {
  const taskName = getTaskName(command, "remove");
  if (!userData.toDoList.includes(taskName))
    return `This task is not on the list!`;
  userData.toDoList.splice(userData.toDoList.indexOf(taskName), 1);
  return `Removed ~${taskName}~ from your ToDo list`;
};

const whatsOnToDo = () => {
  const listLength = userData.toDoList.length;
  if (!listLength) return `There is nothing on your ToDo list`;
  return `You have ${listLength} ToDo's on the list: ${
    listLength === 2
      ? userData.toDoList.join(" and ")
      : userData.toDoList.join(", ")
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
  const expression = allWords.slice(2).join("");
  const validSymbols = /^[\d+\-*/() ]+$/;
  if (!validSymbols.test(expression)) return `Please enter a valid expression`;
  return new Function(`return ${expression}`)();
};

const setTimer = (command) => {
  if (!command.trim()) return `Please enter a valid command`;
  const allWords = command.slice(command.indexOf("for") + 4).split(" ");
  let timeNumber;
  let timeWord;
  let totalDuration = 0;
  for (let one of allWords) {
    const parsedNumber = Number.parseInt(one);
    if (!Number.isNaN(parsedNumber)) {
      timeNumber = one;
    } else if (typeof one === "string") {
      timeWord = one;
      let timerDuration;
      if (timeWord.includes("sec")) {
        timerDuration = timeNumber * 1000;
      } else if (timeWord.includes("min")) {
        timerDuration = timeNumber * 60000;
      } else if (timeWord.includes("hour")) {
        timerDuration = timeNumber * 360000;
      } else return `Please enter correct time interval (sec/min/hour)`;

      totalDuration += timerDuration;
    }
  }
  const doneTimer = () => {
    console.log(`Timer done`);
  };

  setTimeout(doneTimer, totalDuration);

  return `Timer set for ${allWords.join(" ")}`;
};
