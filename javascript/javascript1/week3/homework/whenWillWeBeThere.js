//*When will we be there??

/* Write a function where you speficy your speed in km/h and how far you have to go in km. The function has to return the time it will take to arrive at your destination. The time should be formatted like this: 3 hours and 34 minutes.

Hint: For formatting your best friend is Google! */

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function travelInfoToTime() {
  if (travelInformation.speed === 0) return "Speed ​​can't be zero!";
  let time = travelInformation.destinationDistance / travelInformation.speed;
  let hours = Math.floor(time);
  let minutes = Math.floor(time * 60 - hours * 60);
  return `${hours} hours and ${minutes} minutes`;
}

const travelTime = travelInfoToTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
