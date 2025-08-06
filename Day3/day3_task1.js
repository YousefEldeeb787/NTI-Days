// 1. Create an array of 10 numbers (positive and negative)
let numbers = [5, -3, 12, 7, -9, 0, 8, -2, 4, -6];

// 2. Calculate the sum of positive numbers using a for loop
let sumPositive = 0;
let sumAll = 0;

for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  sumAll += num;

  if (num < 0) {
    continue; // 3. Skip negative values
  }

  sumPositive += num;
}

// 4. Display the results
console.log("Sum of positive numbers:", sumPositive);
console.log("Sum of all numbers:", sumAll);

// 5. Add a new number from user input and remove the first element
let userInput = Number(prompt("Enter a new number to add to the array:"));
numbers.push(userInput);   // Add the user-provided number
numbers.shift();           // Remove the first element

console.log("Modified array:", numbers);
