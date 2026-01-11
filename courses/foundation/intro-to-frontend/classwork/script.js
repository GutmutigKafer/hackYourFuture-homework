// const appendBtn = document.getElementById("appendBtn");
// const appendContainer = document.getElementById("appendContainer");
// appendBtn.addEventListener("click", () => {
//   // Create element
//   const newParagraph = document.createElement("p");
//   // Add text
//   newParagraph.textContent = "This element was created with JavaScript";
//   newParagraph.style.color = "red";
//   appendContainer.appendChild(newParagraph);
// });

// const insertHeader = document.getElementById("insertHeader");

// insertBtn.addEventListener("click", () => {
//   // Create element
//   const newParagraph = document.createElement("p");
//   // Add text
//   newParagraph.textContent = "This element was created with JavaScript";
//   newParagraph.style.color = "blue";
//   newParagraph.style.fontSize = "16px";
//   insertHeader.insertBefore(newParagraph, insertHeader.firstChild);
// });

const favouriteDishes = ["Pasta", "Shawarma", "Pizza", "Sushi"];

const dishesList = document.querySelector(".dishesList");

for (let one of favouriteDishes) {
  const dish = document.createElement("li");
  dish.textContent = one;
  dishesList.appendChild(dish);
}

const podcasts = [
  {
    name: "The mystery om of Johan Klausen Varbourg",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Tips about dogs with small legs",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "You, me, we and us",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
];

const podcastList = document.querySelector(".podcastList");

for (let one of podcasts) {
  const podcast = document.createElement("li");
  podcastList.appendChild(podcast);
  const header = document.createElement("h1");
  header.textContent = one.name;
  podcast.appendChild(header);
  if (one.imageUrl) {
    const image = document.createElement("img");
    image.setAttribute("src", one.imageUrl);
    podcast.appendChild(image);
  }
}

const appendImage = (imageUrl, elementToAppendImageTo) => {
  const image = document.createElement("img");
  image.setAttribute("src", imageUrl);
  elementToAppendImageTo.appendChild(image);
};

appendImage("https://picsum.photos/536/356", document.querySelector("body"));
