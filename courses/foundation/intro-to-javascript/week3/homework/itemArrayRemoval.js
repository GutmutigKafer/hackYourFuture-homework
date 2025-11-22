const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
  "Ahmad",
];
const nameToRemove = "Ahmad";

const removeName_v1 = () => {
  for (let i = 0; i < names.length; i++) {
    if (names[i] === nameToRemove) {
      names.splice(i, 1);
    }
  }
  return names;
};

const removeName_v2 = (name, startFrom = 0) => {
  if (!names.includes(name)) return `${name} is not on the list`;
  const index = names.indexOf(name, startFrom);
  names.splice(index, 1);
  return `Removed ${name} (at index: ${index}) from the list \nUpdated list: \n${names.join(
    ", "
  )}`;
};
