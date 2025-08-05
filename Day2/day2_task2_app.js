const name = prompt("Enter employee name:");
const age = Number(prompt("Enter employee age:"));
const yearsOfExperience = Number(prompt("Enter years of experience:"));
const selfRating = Number(prompt("Rate yourself from 1 to 10:"));
const baseSalary = 10000;

let jobCategory = "";
if (yearsOfExperience < 2) {
  jobCategory = "Junior";
} else if (yearsOfExperience >= 2 && yearsOfExperience <= 5) {
  jobCategory = "Mid-Level";
} else if (yearsOfExperience > 5 && yearsOfExperience <= 10) {
  jobCategory = "Senior";
} else {
  jobCategory = "Expert";
}

let performance = "";
switch (true) {
  case selfRating >= 9:
    performance = "Excellent";
    break;
  case selfRating >= 7:
    performance = "Good";
    break;
  case selfRating >= 5:
    performance = "Average";
    break;
  default:
    performance = "Needs Improvement";
}

let bonusPercentage = 0;
if (yearsOfExperience >= 0 && yearsOfExperience <= 2) {
  bonusPercentage = 0.10;
} else if (yearsOfExperience > 2 && yearsOfExperience <= 5) {
  bonusPercentage = 0.15;
} else if (yearsOfExperience > 5) {
  bonusPercentage = 0.20;
}

const bonus = baseSalary * bonusPercentage;
const finalSalary = baseSalary + bonus;

const hour = new Date().getHours();
const shift = (hour >= 9 && hour < 18) ? "Day Shift" : "Night Shift";

const report = `
Employee Name: ${name}
Age: ${age}
Experience: ${yearsOfExperience} years
Job Category: ${jobCategory}
Self-Rating: ${selfRating}
Performance: ${performance}
Base Salary: $${baseSalary}
Bonus: $${bonus}
Final Salary: $${finalSalary}
Shift: ${shift}
`;

console.log(report);
alert(report);
document.getElementById("result").innerText = report;
