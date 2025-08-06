// 1. Create an array of student objects
let students = [
  { name: "Ali", age: 22, grade: "B", isGraduated: true },
  { name: "Sara", age: 20, grade: "A", isGraduated: false },
  { name: "Youssef", age: 23, grade: "C", isGraduated: true },
  { name: "Laila", age: 19, grade: "A", isGraduated: false }
];

// 2. Calculate average age and count graduated/non-graduated
let totalAge = 0;
let graduatedCount = 0;
let nonGraduatedCount = 0;

for (let i = 0; i < students.length; i++) {
  totalAge += students[i].age;

  if (students[i].isGraduated) {
    graduatedCount++;
  } else {
    nonGraduatedCount++;
  }
}

let averageAge = totalAge / students.length;

// 3. Display Object.keys() and Object.values() for each student
console.log("Student Object Details:");
students.forEach((student, index) => {
  console.log(`Student ${index + 1} Keys:`, Object.keys(student));
  console.log(`Student ${index + 1} Values:`, Object.values(student));
});

// 4. Add a new student with an email property
let newStudent = {
  name: "Mona",
  age: 21,
  grade: "B",
  isGraduated: true,
  email: "mona@example.com"
};

students.push(newStudent);

// 5. Delete isGraduated from all students
students.forEach(student => {
  delete student.isGraduated;
});

// 6. Display final information
console.log("\n✅ Final Student Summary:");
console.log("Student Names:", students.map(student => student.name).join(", "));
console.log("Average Age:", averageAge);
console.log("Graduated Students:", graduatedCount);
console.log("Non-Graduated Students:", nonGraduatedCount);
console.log("Updated Student Objects:", students);
