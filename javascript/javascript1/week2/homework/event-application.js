
// Event application

const weekArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const todayIs = new Date().getDay();
function getEventWeekday(eventInDays) {
    let EventWeekday = todayIs + eventInDays % 7;

    return weekArr[EventWeekday];
}



console.log(getEventWeekday(7));

