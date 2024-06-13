//! Write a function that calculates the factorial of the given numbers.

function factorial(num) {
  return num === 0 || num === 1 ? 1 : num * factorial(num - 1);
}

console.log(`The factorial of ${5} is: ${factorial(5)}`);

//! Write a function that outputs all numbers from the given by the range
//! user in direct order. And one more function - for output in the reverse order.

function getDirectOrder(min, max) {
  if (min > max) {
    console.log("Min number must be less than or equal to max number.");
    return;
  }

  function printHelper(current) {
    if (current > max) {
      return;
    }

    console.log(current);

    printHelper(current + 1);
  }

  printHelper(min);
}

getDirectOrder(1, 3);

function getReverseOrder(min, max) {
  if (min > max) {
    console.log("Min number must be less than or equal to max number.");
    return;
  }

  function printHelper(current) {
    if (current < min) {
      return;
    }

    console.log(current);
    printHelper(current - 1);
  }

  printHelper(max);
}

getReverseOrder(1, 3);

//! Write a function that outputs the number passed to it as a palindrome (a flip number).
//! (For example: output the number 1234 as 4321.)

function reverseNumber(num) {
  //   return Number(num.toString().split("").reverse().join(""));

  return num < 10
    ? num
    : String(num % 10) + reverseNumber(Math.floor(num / 10));
}

console.log(
  `The reversed number of ${1239038409} is: ${reverseNumber(1239038409)}`
);

//! Write a function that calculates the sum of the digits of a number.
//! (For example: number 1357, sum 1 + 3 + 5 + 7 = 16.)

function getSumOfDigits(num) {
  return num < 10 ? num : (num % 10) + getSumOfDigits(Math.floor(num / 10));
}

console.log(getSumOfDigits(3347));

//! Write a function that accepts a number and outputs the corresponding number of nested
//! pairs of parentheses. (For example: the number 4 is (((()))).)

function getParentheses(num) {
  return num === 0 ? "" : "(" + getParentheses(num - 1) + ")";
}

console.log(getParentheses(10));
