function digitalRoot(n) {
    let numberArr = [...n.toString()];
    function loop(numberArr) {
    let sum = 0;
    for (let number of numberArr) {
       sum += Number(number);
    }
    let sumStr = sum.toString();
      if (sumStr.length > 1) {
        numberArr = [...sumStr];
        return loop(numberArr);
        } 
     return sum;
      }
    return loop(numberArr);
  }


 // console.log(digitalRoot(195));
// console.log(digitalRoot(607534));



function persistence(num) {
    let NumArr = [...num.toString()];
    let count = 0;
      function loop(NumArr) {
      if (num > 9) {
            count++;
         let multResult = 1;
        for (let number of NumArr) {
          multResult *= number;
        }
        if (multResult > 9) {
            NumArr = [...multResult.toString()];
            loop(NumArr);
        }
        }
          return count;
      }
      return loop(NumArr);
    }

    // console.log(persistence(39));
    // console.log(persistence(4));
    // console.log(persistence(25));
    // console.log(persistence(999));


    const companies = [
        { name: "Company One", category: "Finance", start: 1981, end: 2003 },
        { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
        { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
        { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
        { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
        { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
        { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
        { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
        // { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },

      ];

      const ages = [33, 56, 40, 58, 15, 80, 21, 39, 40, 20, 24, 43, 45, 19, 36, 27, 49];

    // companies.forEach((company) => console.log(company.name));

   const canDrink = ages.filter((age) => age >= 40)

//    console.log(canDrink);

   const retailCompanies = companies.filter((company) => company.category === "Retail");

//    console.log(retailCompanies);

   const companiesFrom80s = companies.filter((company) => company.start >= 1980 && company.start < 1990);
//    console.log(companiesFrom80s);

   const lastedMoreCompanies = companies.filter(company => company.end - company.start >= 10);

//    console.log(lastedMoreCompanies);

const namesCompanies = companies.map(company => company.name);

// console.log(namesCompanies);

const sortCompanies = companies.sort((c1, c2) => c1.start > c2.start ? 1 : -1);

// console.log(sortCompanies);

const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);

let ageSum = 0;
for (const element of ages) {
     ageSum += element;
}

const sumAge = ages.reduce((total, age) => total + age, 0);

// console.log(ageSum);


const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// console.log(totalYears);

let person = {
name: "Vlad",
surname: "Krichman",
age: 25,
married: false,
address: {
    street: "21 Jump Street",
    city: "Karaganda"
},
collegues: ["Esther", "Alberte", "Maria"]
}

let personJSON = JSON.stringify(person);
let personParse = JSON.parse(personJSON);

// console.log(personJSON);
// console.log(personParse);
// console.log(personParse.address.street);



fetch('https://yesno.wtf/api/')
.then(response => response.json())
.then(yesNoData => {
  console.log(yesNoData);
  const YesNo = document.createElement('h1');
        YesNo.innerHTML = yesNoData.answer;
        document.body.appendChild(YesNo)
        console.log(YesNo);
      })

    