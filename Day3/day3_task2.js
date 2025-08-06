let student = {
  name: "Ahmed",
  age: 20,
  grade: "B",
  isGraduated: false
};

console.log("Student Name:", student.name);
console.log("Student Age:", student.age);

student.grade = "A";

console.log("Keys:", Object.keys(student));
console.log("Values:", Object.values(student));

student.email = "ahmed@example.com";
delete student.isGraduated;

console.log("Updated Student Object:", student);
