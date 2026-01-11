const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const resultWindow = document.getElementById("result");
const result = document.createElement("p");

resultWindow.appendChild(result);

const generateResponse = () => {
  const input = document.getElementById("nameInput");
  const name = input.value;

  if (name.trim()) {
    const randomHouse = houses[Math.floor(Math.random() * 4)];
    result.textContent = `${name} belongs in ${randomHouse}!`;
  } else {
    result.textContent = "Please enter your name!";
  }
  resultWindow.className = "result-card show";
};
