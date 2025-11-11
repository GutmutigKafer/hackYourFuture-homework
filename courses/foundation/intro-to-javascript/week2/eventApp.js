// Event application

const getEventWeekday = (eventInDays) => {
  const weekArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const todayIs = new Date().getDay();
  const eventDay = todayIs + (eventInDays % 7);
  return weekArr[eventDay];
};

console.log(getEventWeekday(7));
