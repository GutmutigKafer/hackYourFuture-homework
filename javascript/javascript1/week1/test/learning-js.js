// Return the Next Number from the Integer Passed



function addition(num) {
    return num + 1;
}

//* console.log(addition(10));

//Bitwise Operations

const n1 = 0b00010110;
const n2 = 0b00001111;

function bitwiseAND(n1, n2) {
	return (n1 & n2).toString(2);
}

function bitwiseOR(n1, n2) {
	return (n1 | n2).toString(2);
}

function bitwiseXOR(n1, n2) {
	return (n1 ^ n2).toString(2);
}

//*  console.log(bitwiseAND(n1, n2), bitwiseOR(n1, n2), bitwiseXOR(n1, n2));




function checkAge(age) {
    return (age > 18) ? true : 'Did parents allow you?';
}
// console.log(checkAge(15))



// console.log("    -----------    ")


function checkAge(age) {
    return (age > 18) || 'Did parents allow you?';
}
// console.log(checkAge(21))


// console.log("    -----------    ")

function minValue(a,b) {

return (a < b) ? a : b;
}
// console.log(minValue(10,10))


// console.log("    -----------    ")


function pow(m, n){
    return Math.pow(m, n);
}
// console.log(pow(7, 5));




function nameJS(name){

    if (name === "ECMAScript") {
       return response = "Right!"
    }
    else {
        return response = "Wrong!" 
    }
}
// console.log(nameJS("ECMAScript"))


function belowOver(a, b, c) {

    return a + b < c ? "Below" : "Over";
}
// console.log(belowOver(5, 6, 15));


//Way to call a function

const isUzerAllowed = () => {
    
}

//Way to call a function

const minAge = 18;
let age = 12;

function isUzerAllowed2(age, minAge) {
if (age < minAge) {
    return `You are younger than ${minAge}`;
}

return `You are older than ${minAge}`;
}
// console.log(isUzerAllowed2(age, minAge));


/*Temperature else if

const temperature = 26;

if (temperature >= 25) {
    console.log("It's hot outside");
} else if (temperature < 25 && temperature > 10) {
    console.log("It's fresh outside");
} else {
    console.log("It's very cold outside");
}

const isCold = true;

if (!isCold) {
    console.log("Wear sunglasses");
} else {
    console.log("Wear jacket");
}

*/

/** 
* @param {string} cpr - The CPR of the person
*/

const getGenderByCpr = (cpr) => {
    const lastDigit = cpr.slice(-1);
    let whatGender;
    
    if (parseInt(lastDigit) % 2 === 0) {
        whatGender = true;
    } else {
        whatGender = false;
    }
    
    return whatGender ? "Female" : "Male";
}

// console.log(getGenderByCpr("123456-7891"));


function bankAccount(balance) {
    return (balance < 0) ? "Please deposit some money" : (balance > 0 && balance < 1000) ? "Your balance is looking okay" : (balance < 3000) ? "Your balance is looking good" : (balance < 10000) ? "Your balance is looking fantastic" : "Your balance is AMAZING!";
}

 // console.log(bankAccount(11000));


 //* Find biggest number in gthe Array

const ArrayNumbers = [1, 8, 3, 4, 5, 4];

 function findBiggestNumberInTheArray(numbers) {
    let maxNumber = Number.NEGATIVE_INFINITY;
 for (let i = 0; i < numbers.length; i++) {
 
    if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];

    }
 }

 return maxNumber;
 }

 // console.log(findBiggestNumberInTheArray(ArrayNumbers));


Array.prototype.max = function() {

    function findBiggestNumberInTheArray(numbers) {
        let maxNumber = Number.NEGATIVE_INFINITY;
     for (let i = 0; i < numbers.length; i++) {
     
        if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    
        }
     }
    
     return maxNumber;
     }
return findBiggestNumberInTheArray(this); 
}

 const numbersArray = [1, 10, 3, 20, 5, 15];
 console.log(numbersArray.max());



//Person

 const person = {
    name: "Vlad",
    lastName: "Krichman",
    fullName: function () {
        return `${this.name} ${this.lastName}`
    }
 }

 console.log(person.fullName());


 const personObj = {
    name: "Vlad",
    lastName: "Krichman",
    birthday: 1994,
    age: function() {
        return new Date().getFullYear() - this.birthday
    },
    gender: "Female",
    sayHello: function() {
        return this.gender === "Male" 
        ? `Hello, Mr. ${this.name}` 
        : `Hello, Ms. ${this.name}`
    },
    nameReverse: function() {
        let reverseName = "";
        for (let i = this.name.length - 1; i >= 0; i--)  {
          const char = this.name[i];
          reverseName += char;
        }
        return reverseName;
      }
 }



 

 console.log(personObj.age());
 console.log(personObj.sayHello());
 console.log(personObj.nameReverse("Vlad"));



 const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 20 },
    { name: "David", age: 23 },
    { name: "Eva", age: 22 },
    { name: "Frank", age: 20 },
    { name: "Grace", age: 21 },
    { name: "Hannah", age: 21 },
    { name: "Ivy", age: 22 },
    { name: "Jack", age: 20 }
  ];

  function getStudentsByAge() {
    const studentsAge = {};
for (let i = 0; i < students.length; i++) {
    const { age, name } = students[i]

    if (!studentsAge[age]){
        studentsAge[age] = [name]
    } else {

        studentsAge[age].push(name)
    }
  }
  return studentsAge;
  }

  console.log(getStudentsByAge())