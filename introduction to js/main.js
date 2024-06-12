//! Ask the user for a number, raise this number to the 2nd power and display.

// const square_of_number = Number(prompt("Please, enter a number:", ""));

// alert("The square of a number: " + Math.pow(square_of_number, 2));


//! Ask the user for 2 numbers and output the arithmetic mean of these numbers.

// const first_number = Number(prompt("Please, enter the first number:", ""));
// const second_number = Number(prompt("Please, enter the second number:", ""));

// alert("Arithmetic mean: " + (first_number + (second_number) / 2);


//! Ask the user for the length of the side of the square and find it's area.

// const side_length = Number(prompt("Please, enter the length of the side of the square:", ""));

// alert("Area of ​​a square: " + Math.pow(side_length, 2));


//! Implement a converter from kilometers to miles (the user enters kilometers, the program outputs miles).

// const kilometers_length = Number(prompt("Please enter the length in kilometers:", ""));

// alert("Length in miles: " + (kilometers_length * 0.621371));


//! Implement the calculator. The user enters two numbers, a the program displays the results of actions + – * / of these numbers.

// const first_value = Number(prompt("Please, enter the first number:", ""));
// const second_value = Number(prompt("Please, enter the second number:", ""));

// const addition = first_value + second_value;
// const subtraction = first_value - second_value;
// const multiplication = first_value * second_value;
// const division = first_value / second_value;

// alert(`${first_value} + ${second_value} = ${addition};
// ${first_value} - ${second_value} = ${subtraction};
// ${first_value} * ${second_value} = ${multiplication};
// ${first_value} / ${second_value} = ${division}`);


//! The user enters the values ​​of a and b for the formula a * x + b = 0, and the program calculates and displays the value of x.

// const a = Number(prompt("Please, enter a:"));
// const b = Number(prompt("Please, enter b:"));
// const x = (-b) / a;

// alert("x is equal: " + x);


//! Ask the user for the current time (hours and minutes) and display how many hours and minutes are left until the next day.

// const hours = Number(prompt("Please, enter the hours (24 hour time format):"));
// const minutes = Number(prompt("Please, enter the minutes (24 hour time format):"));

// alert(`Until the next day: ${23 - hours} hours and ${60 - minutes} minutes`);


//! Ask the user for a three-digit number and output the second digit of that number. To solve the problem, use the operator % (remainder of division).

// const three_digit_number = Number(prompt("Please enter a three-digit number:"));
// const tens = Math.floor(three_digit_number / 10);
// const result = tens % 10;

// alert("Second digit is: " + result);


//! Ask the user for a five-digit number and move the last digit to the beginning (from the number 12345 the number 51234 should come out).

// const five_digit_number = prompt("Please enter a five-digit number:");
// const last_digit = five_digit_number.slice(-1);
// const remaining_digits = five_digit_number.slice(0, -1);
// const result = Number(last_digit + remaining_digits);

// alert("Result is: " + result)

//! The employee's salary is $250 + 10% of sales. Ask for the total amount of sales for the month and do the math salary.

// const total_amount = Number(prompt("Please enter the total amount of sales for the month:"));
// const result = 250 + (total_amount * 0.1);

// alert("Salary is: " + result);
