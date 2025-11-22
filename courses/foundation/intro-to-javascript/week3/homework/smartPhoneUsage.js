const activities = [];
const timeLimit = 190;
let timeCount = 0;

const addActivity = (date, activity, duration) => {
  const oneActivity = { date, activity, duration };
  if (timeCount + duration < timeLimit) {
    timeCount += duration;
    activities.push(oneActivity);
    return `${Object.values(oneActivity).join(" / ")}\nAdded to activities.`;
  } else {
    return `You have reached your limit, no more smartphoning for you!`;
  }
};

const showStatus = (activities, limit) => {
  if (!activities.length) return `Add some activities first!`;
  if (timeCount < limit) {
    return `You have added ${activities.length} activities. They amount to ${timeCount} min. of usage`;
  } else {
    return `You have reached your limit, no more smartphoning for you!`;
  }
};

const historyByDate = {};
const storeByDate = (activities) => {
  for (let one of activities) {
    const { date, activity, duration } = one;
    if (historyByDate.hasOwnProperty([date])) {
      historyByDate[date].push(activity, duration);
    } else {
      historyByDate[date] = [activity, duration];
    }
  }
  return historyByDate;
};

const oneDayActivity = (date) => {
  const dataFormat = /^(0[1-9]|[12]\d|3[01]).(0[1-9]|1[0-2]).(\d{2})$/;
  if (!dataFormat.test(date)) return "Invalid data format. Please use DD.MM.YY";
  let dayTimeCount = 0;
  if (historyByDate[date]) {
    for (let i = 0; i < historyByDate[date].length; i += 2) {
      dayTimeCount += historyByDate[date][i + 1];
    }
    return `On ${date} - you spent ${dayTimeCount} minutes on the phone.`;
  } else {
    return `No activities found for ${date}.`;
  }
};
