const travelInformation = {
  speed: 50,
  destinationDistance: 943,
};

function travelInfoToTime_v1() {
  if (travelInformation.speed === 0) return "Speed ​​can't be zero!";
  const time = travelInformation.destinationDistance / travelInformation.speed;
  const hours = Math.floor(time);
  const minutes = Math.floor(time * 60 - hours * 60);
  return `${hours} hours and ${minutes} minutes`;
}

// console.log(travelInfoToTime_v1());

const travelInfoToTime_v2 = (info) => {
  if (!info.speed || typeof info.speed !== "number") return "Enter valid speed";
  const time = info.destinationDistance / info.speed;
  const hours = Math.floor(time);
  const minutes = Math.floor(time * 60 - hours * 60);
  return (hours ? `${hours} hours and ` : "") + `${minutes} minutes`;
};

console.log(travelInfoToTime_v2(travelInformation));
