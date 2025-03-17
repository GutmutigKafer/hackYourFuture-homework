// For loop

const cars = [
    {
        make: 'Volvo',
        speed: 45,
        color: 'lightYellow',
    },
    {
        make: 'BMW',
        speed: 87,
        color: 'lightBlue',
    },
    {
        make: 'Fiat',
        speed: 78,
        color: 'lightCyan',
    }
];

const colors = [];
for (let i = 0; i < cars.length; i++){
    colors.push(cars[i].color);
}

console.log(colors);

let mapCars = cars.map((car) => car.speed);

console.log(mapCars);

costsList = ['15000', '202020', '302010'];

let mapAddProp = cars.map((car) => car.cost = costsList[cars.indexOf(car)])
console.log(mapAddProp);



celsius = [0, 10, 20, 30];

let fahrenheit = celsius.map(temp => (temp * 1.8) + 32)

console.log(fahrenheit);


//Filter

let words = ["apple", "is", "a", "fruit"]; 

let longWords = words.filter(word => word.length > 4);
console.log(longWords);

//ForEach

names = ["Alice", "Bob", "Charlie"]

let helloName = names.forEach(name => {console.log(`Hello ${name}`)});

let sortedCars = cars.sort((a, b) =>  a.make > b.make ? 1 : -1);
console.log(sortedCars);




const mentors = [
    { "name": "Abed Sujan", "subjects": ['JS', 'HTML', 'CSS', 'NODEJS'], yearOfExperience: 4},
    { "name": "Ahmed Magdy", "subjects": ['JS', 'Database', 'CSS'], yearOfExperience: 1},
    { "name": "Alicia Gonzales", "subjects": ['DB', 'HTML', 'NODEJS'], yearOfExperience: 8},
    { "name": "allan Thraen", "subjects": ['REACT', 'HTML', 'CSS'], yearOfExperience: 3},
    { "name": "Anders Ravn", "subjects": ['JS', 'HTML', 'NODEJS'], yearOfExperience: 2},
    { "name": "Daniel Fernandes", "subjects": ['Database', 'HTML', 'CSS'], yearOfExperience: 9}
];

// console.log(mentors);

let logMentors = mentors.forEach(mentor =>  {
    console.log();
    console.log(mentor, `\nMentor name: ${mentor.name} \n`);
mentor.subjects.forEach(subject => console.log(subject));
    }
);

