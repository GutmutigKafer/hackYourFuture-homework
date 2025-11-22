const company = {
  mentors: [
    {
      name: "Sarah Mitchell",
      position: "Mentor",
      expirience: 7,
      specialty: "Full-Stack Development",
      email: "sarah@hyf.dk",
    },
    {
      name: "Tom Andersen",
      position: "Mentor",
      expirience: 5,
      specialty: "Backend Specialist",
      languages: "Node.,js, Python",
      email: "tom@mentors.hyf.dk",
    },
    {
      name: "Tom Andersen",
      position: "Mentor",

      specialty: "Backend Specialist",
      languages: "Node.,js, Python",
      email: "tom@mentors.hyf.dk",
    },
  ],
  students: [
    {
      name: "Ahmed Hassan",
      age: 23,
      specialty: "JavaScript",
      email: "ahmed.hassan@hyf.dk",
      city: "Copenhagen",
    },
    {
      name: "Maria Santos",
      age: 20,
      specialty: "UX/UI Designer",
      email: "maria.santos@hyf.dk",
      city: "Aarhus",
    },
  ],
  courses: [
    {
      name: "React Fundamentals",
      duration: "6 weeks",
      level: "Intermediate",
      location: "Room B-201",
      time: "Tuesdays 14:00-17:00",
    },
    {
      name: "Node.js and Express",
      duration: "8 weeks",
      level: "Advanced",
      prerequisites: "JavaScript, HTML/CSS",
    },
  ],
  events: [
    {
      name: "Final Project Presentation",
      date: "December 15, 2025",
      attendence: "All students required",
    },
  ],
  exams: [
    {
      name: "Todo List Application",
      when: "Week 4",
      subject: "JaveScript",
      "max-grade": "85 points",
      due: "November 25",
    },
  ],
};

const mentorType = (mentor) => {
  if (!mentor.expirience) return "No expirience";
  return mentor.expirience > 5 ? "Good mentor" : "Bad mentor";
};
// console.log(mentorType(company.mentors[2]));

const friends = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];
// Test.assertDeepEquals(
//   whosOnline(friends),
//   {
//     online: ["David"],
//     offline: ["Lucy"],
//     away: ["Bob"],
//   },
//   "Wrong result for example one of each"
// );

const whosOnline = (friends) => {
  if (!friends.length) return {};
  let final = {};
  let [online, offline, away] = [[], [], []];
  for (let one of friends) {
    let isOnline = one.status === "online";
    let lastActive = one.lastActivity <= 10;
    let name = one.username;
    if (!isOnline) offline.push(name);
    else if (isOnline && lastActive) online.push(name);
    else if (isOnline && !lastActive) away.push(name);
  }
  if (online.length > 0) final.online = online;
  if (offline.length > 0) final.offline = offline;
  if (away.length > 0) final.away = away;
  return final;
};

console.log(whosOnline(friends));
