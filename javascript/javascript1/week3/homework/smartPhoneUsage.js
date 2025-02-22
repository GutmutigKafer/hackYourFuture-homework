
//* CactusIO-interactive (Smart phone usage app) optional

/* Create a variable called activities that stores all activities of the day. What type of variable would you think would make sense? Create a function called addActivity. It should have three parameters: date, activity and duration. The date should be a string, the activity a string and the duration a number. To save the activity push an object that contains the date, the activity and the duration to the activities variable. */

let activities = [];


/** 
 * 
 * @param {String} date : Date in dd.mm.yy format
 * @param {String} activity : Mobile app or other activity
 * @param {Number} duration : Minutes spent
 * 
 */
function addActivity(date, activity, duration){
    activities.push({date, activity, duration})

return activities;
}
addActivity('15.02.22', 'Youtube', 45);
addActivity('16.02.22', 'News', 27);
addActivity('17.02.22', 'Instagram', 36);
addActivity('16.02.22', 'Facebook', 40);
addActivity('16.02.22', 'TikTok', 50);
console.log(activities);

/* Create a function called showStatus. This function should use the activities variable and return a string saying the following: "You have added 3 activities. They amount to 78 min. of usage" */

let timeLimit = 90;
function showStatus(activities){
    if (activities.length !== 0){
        let timeCount = 0;
    let count = activities.length;
    for (let activity of activities){
        timeCount += activity.duration;
        }
        if (timeCount < timeLimit){
         return `You have added ${count} activities. They amount to ${timeCount} min. of usage`
        }
        else {
            return `You have reached your limit, no more smartphoning for you!`
        }
    }
    else {
        return `Add some activities before calling showStatus`
    }
}


console.log(showStatus(activities));

const historyByDate = {};
function storeByDate(){
    
    for (let i = 0; i < activities.length; i++){
        const { date, activity, duration } = activities[i];
        if (!historyByDate[date]){
            historyByDate[date] = [activity , duration];
        } else {
            historyByDate[date].push(activity , duration);
        }   
    }
    return historyByDate;
}
console.log(storeByDate());


function oneDayActivity(date){
    let dayTimeCount = 0;
    if (historyByDate[date]) {
    for (let i = 0; i < historyByDate[date].length; i += 2){
            dayTimeCount += historyByDate[date][i + 1];
        }
        return `On ${date}, you spent ${dayTimeCount} minutes on the phone.`;
    }
    else { 
        return `No activities found for ${date}.`;
    }

}
console.log(oneDayActivity('16.02.22'));
console.log(oneDayActivity('15.02.22'));