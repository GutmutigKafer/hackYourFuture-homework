//*Series duration of my life

/* Create a function that logs out the following text using the seriesDurations array:

Game of thrones took 0.01% of my life
Sopranos took 0.012% of my life
The Wire took 0.007% of my life

In total that is 0.2% of my life */

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 2,
    hours: 20,
    minutes: 8,
  },
  {
    title: "Severance",
    days: 0,
    hours: 14,
    minutes: 53,
  },
  {
    title: "Mindhunter",
    days: 0,
    hours: 15,
    minutes: 50,
  },
  {
    title: "The Big Bang Theory",
    days: 4,
    hours: 6,
    minutes: 18,
  },
];

function seriesOfMyLife() {
  let totalMinutes = 0;
  const minutesInLife = 60 * 24 * 365 * 80;

  for (let series of seriesDurations) {
    let seriesMinutes =
      series.days * 24 * 60 + series.hours * 60 + series.minutes;
    let percentage = ((seriesMinutes / minutesInLife) * 100).toFixed(4);
    console.log(`${series.title} took ${percentage}% of my life`);
    totalMinutes += seriesMinutes;
  }

  let totalPercentage = ((totalMinutes / minutesInLife) * 100).toFixed(4);
  console.log(`In total that is ${totalPercentage}% of my life`);
}

seriesOfMyLife();
