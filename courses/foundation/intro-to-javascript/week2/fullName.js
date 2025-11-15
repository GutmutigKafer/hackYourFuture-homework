//Flight booking fullname function

const getFullName = (firstName, lastName, gender, useFormalName) => {
  const formal = gender === "Male" ? "Monsieur " : "Madame ";
  const message = `${useFormalName ? formal : ""}${firstName} ${lastName}`;
  return !firstName?.trim() || !lastName?.trim()
    ? `Please enter both First name and Last name!`
    : message;
};

const fullname1 = getFullName("Vlad", "Krichman", "Male", false);
const fullname2 = getFullName("Maria", "Kristensen", "Female", true);
const fullname3 = getFullName("Francesc", "Sarda", "Male", true);
const fullname4 = getFullName("   ", "Jonson", "Female", false);

console.log(` ${fullname1} \n ${fullname2} \n ${fullname3} \n ${fullname4} `);
