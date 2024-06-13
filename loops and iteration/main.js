//! Output # as many times as the user specified.

// let number = Number(prompt("Please, enter a number:"))
// let result = ""

// if (number > 0) {
//     while (number > 0) {
//         result += "#"
//         number--
//     }
//     alert(result)
// } else {
//     alert("Invalid input. Please enter a positive number.");
// }

//! The user entered a number, and all numbers were displayed on the screen: from entered to 0.

// let number = Number(prompt("Please, enter a number:"))
// let result = []

// if (number >= 0) {
//     while (number >= 0) {
//         result.push(number)
//         number--
//     }
//     alert(result)
// } else if (number <= 0) {
//     while (number <= 0) {
//         result.push(number)
//         number++
//     }
//     alert(result)
// } else {
//     alert("Invalid input.");
// }

//! Ask for the number and degree. Reduce the number to the specified power and print the result.

// let number = Number(prompt("Please, enter a number:"))
// let degree = Number(prompt("Please, enter a degree:"))
// let result = 1

// if (degree > 0) {
//     while (degree > 0) {
//         result *= number
//         degree--
//     }
//     alert(result)
// } else if (degree < 0) {
//     while (degree < 0) {
//         result /= number
//         degree++
//     }
//     alert(result)
// } else {
//     alert("Invalid input.");
// }

//! Invite 2 numbers and find all common divisors.

// let first_number = Number(prompt("Please, enter the first number:"));
// let second_number = Number(prompt("Please, enter the sond number:"));

// function findDivisors(num) {
//     let divisors = [];
//     let i = 1;

//     while (i <= Math.sqrt(num)) {
//         if (num % i === 0) {
//             divisors.push(i);

//             if (i !== num / i) {
//                 divisors.push(num / i);
//             }
//         }

//         i++;
//     }

//     return divisors.sort((a, b) => a - b);
// }

// function findCommonDivisors(num1, num2) {
//     let result = [];
//     let i = 0;
//     let j = 0;

//     let first_divisors = findDivisors(num1);
//     let second_divisors = findDivisors(num2);

//     while (i < first_divisors.length && j < second_divisors.length) {
//         if (first_divisors[i] < second_divisors[j]) {
//             i++;
//         } else if (first_divisors[i] > second_divisors[j]) {
//             j++;
//         } else {
//             result.push(first_divisors[i]);
//             i++;
//             j++;
//         }
//     }

//     return result;
// }

// alert(findCommonDivisors(first_number, second_number));


//! Calculate the factorial of the number entered by the user.

// const number = Number(prompt("Please, enter a number:"));

// if (number < 0) {
//     alert("Invalid input. Please enter a non-negative integer.")
// } else {
//     let factorial = 1;
//     let i = 1;

//     while (i <= number) {
//         factorial *= i;
//         i++
//     }

//     alert(`The factorial of ${number} is ${factorial}.`)
// }


//! Invite the user to solve the example 2 + 2 * 2, until he gives the correct answer.

// let result;

// do {
//     result = Number(prompt("Please, enter the result (2 + 2 * 2):"));
// } while (result !== 6);

// alert("Correct! The result is 6.");


//! Divide the number 1000 by 2 until you get a smaller number, than 50. Print the resulting number and how many divisions were made.

// let result = 1000;
// let count = 0;

// do {
//     result /= 2;
//     count++;
// } while (result >= 50);

// alert(`Resulting number: ${result}`);
// alert(`Number of divisions made: ${count}`);


//! Print all numbers from 1 to 100 that are multiples of the number specified by the user.

// const number = Number(prompt("Please, enter a number:"));
// const result = [];

// for (let i = 1; i < 100; i++) {
//     if (i % number === 0) {
//         result.push(i)
//     }
// }

// alert(`Multiples of ${number} from 1 to 100 are: ${result.join(', ')}`);


//! Output every 4th element from the user specified range The user specifies the minimum and maximum range value.

// const min = Number(prompt("Please, enter the minimum range value:"));
// const max = Number(prompt("Please, enter the maximum range value:"));
// const result = [];

// for (let i = min; i <= max; i++) {
//     if ((i - min) % 4 === 0) {
//         result.push(i);
//     }
// }

// alert(result);


//! Request a number and check if it is prime. Prime number is divisible without a remainder only by itself and by 1.

// const number = Number(prompt("Please, enter a number:"));
// let result = [];

// for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//         result.push(i)
//     }
// }

// result.length > 1 ? alert(`${number} is prime.`) : alert(`${number} is not prime.`);