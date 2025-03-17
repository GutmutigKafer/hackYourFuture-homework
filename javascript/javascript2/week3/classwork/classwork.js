// const timer = 2000;
// const myFunc = (t) => console.log(`${t / 1000} seconds passed`);
// setTimeout(() => myFunc(timer), timer);

const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')

let clickCount = 0;
const counterAction = () => {
    clickCount += 1;
    console.log(clickCount);
    };

button1.addEventListener('click', counterAction);


button2.addEventListener('click', counterAction);


button3.addEventListener('click', () => setTimeout( () => console.log("This text was delayed by 3 seconds"), 3000));

document.addEventListener('DOMContentLoaded', () => 
{
    clickCount = 100
    console.log('DOM is loaded');
})

let positions = [];
const mouseEvent =  (event) => {
    positions.push({x: event.clientX, y: event.clientY })
    
}
document.addEventListener('mousemove', mouseEvent);

const calculateAvg = () => {
    let sumX = 0;
    let sumY = 0;
    positions.forEach(position => {
        sumX = sumX + position.x;
        sumY = sumY + position.y;
    })
const avgX = sumX / positions.length;
const avgY = sumY / positions.length;
console.log(`avgX = ${avgX}, avgY = ${avgY}, count: ${positions.length}`);
};


setInterval(calculateAvg, 1000);


