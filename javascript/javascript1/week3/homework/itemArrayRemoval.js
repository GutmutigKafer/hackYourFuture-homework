//*Item array removal
/* Remove the item in names that is equal to nameToRemove
Copy the code below to your homework */

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
function removeName() {
  for (let i = 0; i < names.length; i++) {
    if (names[i] === nameToRemove) {
      names.splice(i, 1);
      return names;
    }
  }
  return names;
}
removeName();
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
