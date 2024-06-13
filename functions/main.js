//! Write a function that takes 2 numbers and returns the smaller of them.

function getSmallerNumber(num1, num2) {
  console.log(num1 > num2 ? num2 : num1);
}

getSmallerNumber(3, 5);

//! Write a function that reduces the given number to the specified number degree.

function reducesNumberToDegree(num, degree) {
  console.log(Math.pow(num, degree));
}

reducesNumberToDegree(3, 2);

//! Write a function that accepts 2 numbers and a sign (+ - * /), calculates the
//! example and returns the result.

function calculates(num1, num2, sign) {
  switch (sign) {
    case "+":
      console.log("Sum of numbers: " + (num1 + num2));
      break;
    case "-":
      console.log("Difference of numbers: " + (num1 - num2));
      break;
    case "*":
      console.log("Product of numbers: " + num1 * num2);
      break;
    case "/":
      if (num2 !== 0) {
        console.log("Division of numbers: " + num1 / num2);
      } else {
        console.log("Error: Division by zero.");
      }
      break;

    default:
      console.log("Invalid operator entered.");
  }
}

calculates(3, 3, "+");

//! Write a function that checks whether a number passed to it is true simple.

function isPrime(num) {
  let result = [];

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }

  console.log(
    result.length === 0 ? `${num} is prime.` : `${num} is not prime.`
  );
}

isPrime(10);

//! Write a function that accepts a number and outputs the multiplication table for
//! this number. Call the function for everyone numbers from 2 to 9.

function getMultiplicationTable(num) {
  const result = [];

  for (let i = 2; i < 10; i++) {
    result.push(num * i);
  }

  console.log(result);
}

getMultiplicationTable(2);

//! Write a function that implements the % operator. The function takes 2 parameters
//! and returns the remainder of the division the first parameter to the second. In the
//! function use only + - * /, and do not use the % operator.

function getRemainder(num1, num2) {
  console.log(num1 - num2 * Math.floor(num1 / num2));
}

getRemainder(7, 2);

//! Write a function that accepts from 1 to 5 numbers and returns their amount.

function getNumberAmount(...args) {
  let sum = 0;

  for (let arg of args) {
    sum += arg;
  }

  console.log(sum);
}

getNumberAmount(1, 2, 3, 4);

//! Write a function that accepts from 1 to 5 numbers and returns more of them.

function getMax(...args) {
  console.log(Math.max(...args));
}

getMax(1, 2, 3, 4, 5);

//! Write a function that outputs all even or odd numbers numbers in the range specified
//! by the user. Which numbers to output is determined by the third parameter of the bool
//! type (true – even, false - odd).

function getNumbersInRange(min, max, isEven) {
  const result = [];

  if (isEven) {
    for (let i = min; i <= max; i++) {
      if (i % 2 === 0) {
        result.push(i);
      }
    }
  } else {
    for (let i = min; i <= max; i++) {
      if (i % 2 !== 0) {
        result.push(i);
      }
    }
  }

  console.log(result);
}

getNumbersInRange(4, 10, true);

//! Write a function that accepts a date (day, month, year) and returns the next day's
//! date as a string "day.month.year". It is advisable to write a check for a leap year
//! as a separate function.

function getNextDay(day, month, year) {
  const currentDate = new Date(year, month - 1, day);

  currentDate.setDate(currentDate.getDate() + 1);

  const nextDay = currentDate.getDate();
  const nextMonth = currentDate.getMonth() + 1;
  const nextYear = currentDate.getFullYear();

  console.log(`${nextDay}.${nextMonth}.${nextYear}`);
}

getNextDay(4, 5, 2023);
