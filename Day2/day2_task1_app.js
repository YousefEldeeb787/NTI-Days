const name = prompt("Enter your name:");
const birthYear = parseInt(prompt("Enter your birth year:"));
const isStudent = confirm("Are you a student?");

const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

let category = "";
if (age < 13) {
  category = "Kid";
} else if (age >= 13 && age <= 17) {
  category = "Teen";
} else if (age >= 18 && age <= 59) {
  category = "Adult";
} else if (age >= 60) {
  category = "Senior";
} else {
  category = "Unknown";
}

let message = `Hello ${name}, you are ${age} years old.\nCategory: ${category}.`;
if (isStudent) {
  message += `\nDon't forget to study hard!`;
}

console.log(message);
alert(message);
document.getElementById("result").innerText = message;
