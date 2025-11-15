// Student manager

const class07Students = [];
const addStudentToClass = (studentName) => {
  const isSpace =
    class07Students.length < 6 || studentName === "Queen Margrethe";
  const isValidName = studentName.trim() !== "";
  const isInClass = class07Students.includes(studentName);
  let message = "";

  if (!isSpace) {
    message = `Cannot add more students to class 07`;
  } else if (!isValidName) {
    message = `You have to write a name of a student!`;
  } else if (isInClass) {
    message = `Student ${studentName} is already in the class 
Class list: ${class07Students.join(", ")}\n`;
  } else {
    class07Students.push(studentName);
    message = `Student ${studentName} added to class 
Class list: ${class07Students.join(", ")}\n`;
  }
  return message;
};

const getNumberOfStudents = (classN) => {
  return `There are ${classN.length} students in the class`;
};

console.log(addStudentToClass("Vlad"));
console.log(addStudentToClass("Vlad"));
console.log(addStudentToClass("Anna"));
console.log(addStudentToClass("Maria"));
console.log(addStudentToClass("Josh"));
console.log(addStudentToClass("Alberte"));
console.log(addStudentToClass("   "));
console.log(addStudentToClass("Esther"));
console.log(addStudentToClass("Queen Margrethe"));

console.log(getNumberOfStudents(class07Students));
