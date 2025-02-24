// 1.1 Implement Student Grades

let students = [];
function createStudent(name, age, grades) {
  let student = { name, age, grades };
  students.push(student);
  return student;
}

console.log(createStudent("Vlad", 25, [80, 80, 80, 89]));
console.log(createStudent("Anita", 22, [50, 95, 83, 99]));
console.log(createStudent("Maxim", 26, [92, 100, 90, 77]));
console.log(students);

function findTopStudent(students) {
  let biggestAverage = 0;
  let bestStudent;
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let gradesSum = 0;
    for (let j = 0; j < student.grades.length; j++) {
      gradesSum += student.grades[j];
    }
    student.average = gradesSum / student.grades.length;
    console.log(student.average);
    if (student.average > biggestAverage) {
      biggestAverage = student.average;
      bestStudent = student.name;
    }
    console.log(biggestAverage);
  }
  console.log(bestStudent);

    return bestStudent;
}

console.log(findTopStudent(students));
