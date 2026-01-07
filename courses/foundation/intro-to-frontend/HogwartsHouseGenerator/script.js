const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const resultWindow = document.getElementById("result");
const result = document.createElement("div");

resultWindow.appendChild(result);

const generateResponse = () => {
  const input = document.getElementById("nameInput");
  const name = input.value;

  if (name.length === 0) {
    result.textContent = "Please enter your name!";
  } else {
    const randomHouse = houses[Math.floor(Math.random() * 4)];
    result.textContent = `${name} belongs in ${randomHouse}!`;
  }
  resultWindow.className = "result-card show";
};
