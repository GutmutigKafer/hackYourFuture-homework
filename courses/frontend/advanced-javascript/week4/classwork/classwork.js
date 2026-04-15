class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.element = null;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  render() {
    const div = document.getElementById("user");
    const htmlFullName = this.element || document.createElement("h2");
    htmlFullName.textContent = this.getFullName();

    if (!this.element) {
      div.appendChild(htmlFullName);
    }

    this.element = htmlFullName;
  }
}

const user1 = new User("Vlad", "Krichman");

console.log(user1.getFullName());

user1.render();

user1.firstName = "Vladislav";

user1.render();

// class Person extends User {
//   constructor(param) {
//     super(param);
//   }
// }

class Job {
  constructor(info) {
    this.id = info.id;
    this.title = info.title;
    this.description = info.description;
    this.startDate = info.startDate;
    this.endDate = info.endDate;
  }
}

const job1 = new Job({
  id: 1,
  title: "SMTH",
  description: "lalal",
  startDate: "10.05.12",
  endDate: "10.05.13",
});
console.log(job1);

class Education {
  constructor(id, title, school, address, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.school = school;
    this.address = address;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

class CV {
  constructor(email) {
    this.email = email;
    this.jobs = [];
    this.educations = [];
  }

  addJob(job) {
    this.jobs.push(job);
  }

  removeJob(job) {
    this.jobs.forEach((one, i) => {
      if (typeof job === "string") {
        if (Object.values(one)[1] === job) {
          this.jobs.splice(i, 1);
        }
      } else {
        this.jobs.splice(i, 1);
      }
    });
  }

  addEducation(education) {
    // add functionality here
  }

  removeEducation(education) {
    // add functionality here
  }
}

const myCV = new CV("vladonozes@gmail.com");

const addJob = myCV.addJob(job1);

const removeJob = myCV.removeJob(job1);
const removeJob1 = myCV.removeJob("SMTH");

console.log(myCV);
