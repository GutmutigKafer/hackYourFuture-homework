// Weather wear

const whatToWear = (temp) => {
  if (typeof temp !== "number") return `Please enter valid temperature`;
  switch (true) {
    case temp >= 40:
      return "You don't need to wear anything!";
    case temp >= 25:
      return "You should wear a t-shirt";
    case temp >= 10:
      return "You should wear a sweater";
    case temp >= -5:
      return "You should wear a warm jacket";
    default:
      return "You should wear everything you can find!";
  }
};
console.log(whatToWear(30));
