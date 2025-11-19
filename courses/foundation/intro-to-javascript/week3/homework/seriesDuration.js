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

function seriesOfMyLife_v1() {
  let totalMinutes = 0;
  const minutesInLife = 60 * 24 * 365 * 80;

  for (let series of seriesDurations) {
    const seriesMinutes =
      series.days * 24 * 60 + series.hours * 60 + series.minutes;
    const percentage = ((seriesMinutes / minutesInLife) * 100).toFixed(4);
    console.log(`${series.title} took ${percentage}% of my life`);
    totalMinutes += seriesMinutes;
  }

  const totalPercentage = ((totalMinutes / minutesInLife) * 100).toFixed(4);
  console.log(`In total that is ${totalPercentage}% of my life`);
}

// seriesOfMyLife_v1();

const seriesOfMyLife_v2 = (mySeries, lifeYears) => {
  const time = [60, 24, 365, lifeYears];
  const minutesInLife = time.reduce((acc, one) => acc * one, 1);
  const percentage = (minutes) => ((minutes / minutesInLife) * 100).toFixed(4);
  const totalMinutes = mySeries
    .map((one) => {
      const days = one.days * time[1] * time[0];
      const hours = one.hours * time[0];
      const minutes = one.minutes;
      const seriesMinutes = days + hours + minutes;
      console.log(`${one.title} took ${percentage(seriesMinutes)}% of my life`);
      return seriesMinutes;
    })
    .reduce((total, one) => total + one);
  return `In total that is ${percentage(totalMinutes)}% of my life`;
};

console.log(seriesOfMyLife_v2(seriesDurations, 80));
