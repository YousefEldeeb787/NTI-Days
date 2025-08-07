function multiply(a, b) {
  return a * b;
}

function calculate(num1, num2, operation) {
  const result = operation(num1, num2);
  displayResult(result);
}

function displayResult(result) {
  console.log("The result is:", result);
}

calculate(5, 3, multiply);
