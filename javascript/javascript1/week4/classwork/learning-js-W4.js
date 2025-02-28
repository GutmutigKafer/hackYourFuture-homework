/* // Fibonachi

function fib(iteration) {
  let firstNum = 0;
  let secondNum = 1;
  for (let i = 0; i < iteration; i++) {

    
  }
}

*/

console.log('Hello World');
console.warn('Something is about to happen...')
console.error('KABOOOOM');



let firstName = "Alice";
let age = 16;
let country = "USA";
let message;
let ageStatus;

if (age < 18) {
    ageStatus = "minor";
} else {
    ageStatus = "adult";
}

message = `${firstName} is a ${ageStatus} from ${country}.`;

console.log(message); // Alice is a minor from USA.

const canSee = true;
let room;
if (canISee) {
    room = "This room is not dark";
}
else {
    room = "This room is pitch black";
}
console.log(room);