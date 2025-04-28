//  Class Exercise: Create a Product class with properties: name, price, and inStock (default value: true). Create two different product instances.

class Product {
  constructor(name, price, inStock = true) {
    this.name = name;
    this.price = price;
    this.inStock = inStock;
  }
}

const product1 = new Product("Jeans", 1700, true);
const product2 = new Product("Sweater", 1000, false);
// console.log(product1);
// console.log(product2);

const product3 = new Product(null, 200);
// console.log(product3);

const product4 = new Product("Shoes");
// console.log(product4);

// Class Methods
// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.scores = [];
//   }

//   addScore(score) {
//     this.scores.push(score);
//   }

//   getAverage() {
//     if (this.scores.length === 0) {
//       return 0;
//     }
//     const total = this.scores.reduce((sum, score) => sum + score, 0);
//     return total / this.scores.length;
//   }

//   displayInfo() {
//     console.log(`
// Student name: ${this.name}
// Student age: ${this.age}
// Student scores: ${this.scores}
// Score avarage: ${this.getAverage()}
// `);
//   }
// }
// const student1 = new Student("Johny", 20);
// student1.addScore("18");
// student1.addScore("24");
// student1.addScore("65");
// const student2 = new Student("Lilly", 24);
// student2.addScore("21");
// student2.addScore("53");
// student2.addScore("42");
// console.log(student1);
// console.log(student1.getAverage());
// console.log(student2);
// console.log(student2.getAverage());

// student1.displayInfo();

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user1 = new User("Vlad", "Krichman");
// console.log(user1.firstName);
// console.log(user1);
// console.log(user1.getFullName());

class CV {
  constructor(email) {
    this.jobs = [];
    this.educations = [];
    this.email = email;
  }

  addJob(job) {
    if (!this.jobs.includes(job)) {
      this.jobs.push(job);
    }
  }

  removeJob(job) {
    if (this.jobs.includes(job)) {
      this.jobs.splice(this.jobs.indexOf(job), 1);
    }
  }

  addEducation(education) {
    if (!this.educations.includes(education)) {
      this.educations.push(education);
    }
  }

  removeEducation(education) {
    if (this.educations.includes(education)) {
      this.educations.splice(this.educations.indexOf(education), 1);
    }
  }

  renderCV() {
    const myCV = document.getElementById("myCV");
    const jobsList = document.createElement("div");

    this.jobs.forEach((job) => {
      const oneJob = document.createElement("h3");
      oneJob.innerHTML = job;
      jobsList.appendChild(oneJob);
    });
    myCV.appendChild(jobsList);
  }
}

const myCV = new CV("vladkrichman@mail.com");
// console.log(myCV);

// myCV.addJob("College Assistant");
// myCV.addJob("Camera Operator");
// myCV.addJob("Photographer");
// console.log(myCV);

// myCV.addEducation("HYF");
// myCV.addEducation("EFC");

// console.log(myCV);

// myCV.removeEducation("EFC");
// console.log(myCV);

// myCV.renderCV();

//* EXTEND

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
  }
}

// GraduateStudent inherits from Student
class GraduateStudent extends Student {
  constructor(name, age, thesisTopic) {
    super(name, age); // Call the parent constructor
    this.thesisTopic = thesisTopic;
  }

  // New method
  displayThesis() {
    console.log(`${this.name}'s thesis is on: ${this.thesisTopic}`);
  }

  // Optional: override parent method
  introduce() {
    console.log(
      `I'm ${this.name}, a graduate student working on: ${this.thesisTopic}`
    );
  }
}

// ✅ Testing it out
const gradStudent = new GraduateStudent("Lina", 25, "Machine Learning");

gradStudent.introduce(); // I'm Lina, a graduate student working on: Machine Learning
gradStudent.displayThesis(); // Lina's thesis is on: Machine Learning

// ✅ Test parent
const regularStudent = new Student("Tom", 20);
regularStudent.introduce();
// Output: Hi, I'm Tom, and I'm 20 years old.
