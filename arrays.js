const companies = [
  "Acme Corporation",
  "Globex",
  "Initech",
  "Umbrella Corporation",
  "Wayne Enterprises",
];
const jobTitles = [
  "Software Engineer",
  "Project Manager",
  "Sales Representative",
  "Marketing Coordinator",
  "Financial Analyst",
];
const maxYearsWorked = 30;

function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

const employeeData = [];

for (let i = 0; i < 5; i++) {
  const company = companies[i];
  const title = jobTitles[getRandomNumber(jobTitles.length) - 1];
  const yearsWorked = getRandomNumber(maxYearsWorked);

  employeeData.push({ company, title, yearsWorked });
}

console.log(employeeData);
