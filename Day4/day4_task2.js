function greetUser() {
  setTimeout(() => {
    console.log("Hello, User!");
  }, 3000);
}

function countdown() {
  let count = 10;
  const intervalId = setInterval(() => {
    console.log(count);
    count--;
    if (count === 0) {
      console.log("Time's up!");
      clearInterval(intervalId);
    }
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Countdown stopped after 5 seconds.");
  }, 5000);
}

function clearTimeoutExample() {
  const timeoutId = setTimeout(() => {
    console.log("This will be cleared!");
  }, 5000);

  clearTimeout(timeoutId);
}

greetUser();
countdown();
clearTimeoutExample();
