// Student manager

const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here

if (studentName !== "") {

if (studentName === "Queen Margrethe") {
    class07Students.push(studentName);
} 
else if (class07Students.length < 6) {
    
    if (!class07Students.includes(studentName)){
        class07Students.push(studentName);
    }
     else {
        console.log(`Student ${studentName} is already in the class`);
  }
    } 
    else {
        console.log(`Cannot add more students to class 07`) 
    }
} 
else {
    console.log(`You have to write a name of a student!`)
}

return class07Students;
}

console.log(addStudentToClass("Vlad"))
 console.log(addStudentToClass("Vlad"))
console.log(addStudentToClass("Anna"))
console.log(addStudentToClass("Maria"))
console.log(addStudentToClass("Josh"))
console.log(addStudentToClass("Alberte"))
console.log(addStudentToClass("Anita"))
console.log(addStudentToClass("Esther"))
console.log(addStudentToClass("Queen Margrethe"))


function getNumberOfStudents() {
  // You write code here
  return class07Students.length;
}
console.log(`There are ${getNumberOfStudents()} students in class 07 `);