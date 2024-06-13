//! Ask the user for a number and determine if it is positive, negative, or zero.

// const number = Number(prompt("Please, enter a number:"));

// if (number > 0) {
//     alert("The number is positive.");
// } else if ( number < 0) {
//     alert("The number is negative.");
// } else {
//     alert("The number is zero.");
// }


//! Ask the user for their age and check for correctness of entered data (0–120 years).

// const user_age = Number(prompt("Please, enter your age:"));

// if (user_age < 0) {
//     alert("You are not born yet.");
// } else if ( user_age > 120) {
//     alert("Are you Edward Cullen?");
// } else {
//     alert("You are awesome.");
// }


//! Ask the user for a number and display its module (||7| = 7, |-7| = 7).

// const number = Number(prompt("Please, enter a number:"));

// if (number < 0) {
//     alert("Module is: " + Math.abs(number));
// } else if ( number > 0) {
//     alert("Module is: " + number);
// } else {
//     alert("The number is zero.");
// }


//! Ask the user for the time (hours, minutes, seconds) and check the correctness of the entered data.

// const hours = Number(prompt("Please, enter the hours:"));
// const minutes = Number(prompt("Please, enter the minutes:"));
// const seconds = Number(prompt("Please, enter the seconds:"));

// if (hours > 23 || hours < 0 || minutes > 59 || minutes < 0 || seconds > 59 || seconds < 0) {
//     alert("Invalid date entered.");
// } else {
//     alert("Entered time is valid: " + hours + ":" + minutes + ":" + seconds);
// }


//! Request the coordinates of the point (x, y) and determine the quarter number in which this point falls. 
//! It is necessary to take into account cases where the point falls on the X or Y axis or on the origin of the coordinates.

// const x = Number(prompt("Please, enter the x:"));
// const y = Number(prompt("Please, enter the y:"));

// if (x > 0 && y > 0) {
//     alert("The point is in quarter 1.");
// } else if (x > 0 && y < 0) {
//     alert("The point is in quarter 4.");
// } else if (x < 0 && y > 0) {
//     alert("The point is in quarter 3.");
// } else if (x < 0 && y < 0) {
//     alert("The point is in quarter 2.");
// } else if (x === 0 && y === 0) {
//     alert("The point is at the origin.");
// } else if (x === 0) {
//     alert("The point is on the X-axis.");
// } else if (y === 0) {
//     alert("The point is on the Y-axis.");
// }


//! Ask the user for the month number and display its name.

// const month_number = Number(prompt("Please, enter the month number:"));

// switch (month_number) {
//     case 1:
//         alert("It is January.");
//         break;
//     case 2:
//         alert("It is February.");
//         break;
//     case 3:
//         alert("It is March.");
//         break;
//     case 4:
//         alert("It is April.");
//         break;
//     case 5:
//         alert("It is May.");
//         break;
//     case 6:
//         alert("It is June.");
//         break;
//     case 7:
//         alert("It is July.");
//         break;
//     case 8:
//         alert("It is August.");
//         break;
//     case 9:
//         alert("It is September.");
//         break;
//     case 10:
//         alert("It is October.");
//         break;
//     case 11:
//         alert("It is November.");
//         break;
//     case 12:
//         alert("It is December.");
//         break;

//     default:
//         alert("Invalid month number. Please enter a number between 1 and 12.");
// }


//! Implement the calculator. The user enters 2 numbers and sign (+ - */). Depending on the entered sign, solve the example and display the result.

// const first_number = Number(prompt("Please, enter the first number:"));
// const second_number = Number(prompt("Please, enter the second number:"));
// const sign = prompt("Please, enter the sign (+, -, *, /):");

// switch (sign) {
//     case "+":
//         alert("Sum of numbers: " + (first_number + second_number))
//         break;
//     case "-":
//         alert("Difference of numbers: " + (first_number - second_number))
//         break;
//     case "*":
//         alert("Product of numbers: " + (first_number * second_number))
//         break;
//     case "/":
//         if (second_number !== 0) {
//             alert("Division of numbers: " + (first_number / second_number));
//         } else {
//             alert("Error: Division by zero.");
//         }
//         break;

//     default:
//         alert("Invalid operator entered.");
// }


//! Invite 2 numbers and draw more of them.

// const first_number = Number(prompt("Please, enter the first number:"));
// const second_number = Number(prompt("Please, enter the second number:"));

// first_number > second_number ? alert(first_number) : alert(second_number);


//!Request 1 number and check it for a multiple of 5.

// const number = Number(prompt("Please, enter the first number:"));

// number % 5 === 0 ? alert("Number is multiple of 5") : alert("Number is not multiple of 5");


//! Ask the user for the name of the planet. If the user entered "Earth" or "earth", then output "Hello, Earthling!". In other cases, output "Hello, alien!".

const name_of_the_planet = prompt("Please, enter the name of the planet:").toLowerCase();

name_of_the_planet === "earth" ? alert("Hello, Earthling!") : alert("Hello, alien!");