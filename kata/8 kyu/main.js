//? Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

//? Sum of positive

function positiveSum(arr) {
  return arr.reduce((a, b) => (b > 0 ? a + b : a), 0);
}

//? Negative

function makeNegative(num) {
  return -Math.abs(num);
}

//? Reversed Strings

function solution(str) {
  return str.split("").reverse().join("");
}

//? Convert boolean values to strings 'Yes' or 'No'.

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

//? Remove First and Last Character

function removeChar(str) {
  return str.slice(1, -1);
}

//? Square(n) Sum

function squareSum(numbers) {
  return numbers.reduce((a, b) => a + Math.pow(b, 2), 0);
}

//? String repeat

function repeatStr(n, s) {
  return s.repeat(n);
}

//? Grasshopper - Summation

var summation = function (num) {
  let sum = 0;

  for (let i = 0; i <= num; i++) {
    sum += i;
  }

  return sum;

  //return num * (num + 1) / 2
};

//? Counting sheep...

function countSheeps(sheep) {
  let count = 0;

  sheep.map((s) => (s ? count++ : count));

  return count;

  //return sheep.filter(Boolean).length;
}

//? Basic Mathematical Operations

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return null;
  }

  //return eval(value1 + operation + value2);
}

//? Abbreviate a Two Word Name

function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}

//? Century From Year

function century(year) {
  return Math.ceil(year / 100);
}

//? Keep Hydrated!

function litres(time) {
  return Math.floor(time * 0.5);
}

//? Convert number to reversed array of digits

function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}

//? Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
  return input && input.length
    ? [
        input.filter((p) => p > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
}

//? Fake Binary

function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n > 4 ? (n = 1) : (n = 0)))
    .join("");
}

//? Count by X

function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

//? DNA to RNA Conversion

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

//? Sum without highest and lowest number

function sumArray(array) {
  if (!array || array.length <= 1) {
    return 0;
  }

  const max = Math.max(...array);
  const min = Math.min(...array);

  return array.reduce((acc, num) => acc + num, 0) - max - min;
}

function points(games) {
  let totalPoints = 0;

  games.forEach((match) => {
    const [xStr, yStr] = match.split(":");
    const x = parseInt(xStr);
    const y = parseInt(yStr);

    if (x > y) {
      totalPoints += 3;
    } else if (x === y) {
      totalPoints += 1;
    }
  });

  return totalPoints;
}

//? All Star Code Challenge #18

function strCount(str, letter) {
  return str.split("").filter((l) => l === letter).length;
  //str.split(letter).length-1
}

//? Is this my tail?

function correctTail(body, tail) {
  return body.endsWith(tail);
}

//? Is this my tail?

// const correctTail = (x, y) => x.endsWith(y);

//?
function howManyDalmatians(number) {
  const dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIONS!!!",
  ];

  if (number <= 10) {
    return dogs[0];
  } else if (number <= 50) {
    return dogs[1];
  } else if (number < 101) {
    return dogs[2];
  } else if (number === 101) {
    return dogs[3];
  }
}
const quarterOf = (month) => {
  if (1 <= month <= 3) {
    return 1;
  } else if (4 <= month <= 6) {
    return 2;
  } else if (7 <= month <= 9) {
    return 3;
  } else if (10 <= month <= 12) {
    return 4;
  } else {
    throw new Error("Month must be between 1 and 12");
  }
};
