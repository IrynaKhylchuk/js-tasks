//? Ones and Zeros

const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

//? Class conundrum - Bug Fixing #7

class List {
  constructor(type) {
    this.type = type;
    this.items = [];
    this.count = 0;
  }

  add(item) {
    if (typeof item != this.type)
      return `This item is not of type: ${this.type}`;

    this.items.push(item);
    this.count++;
    return this;
  }
}

function getSumOfDigits(integer) {
  return String(integer)
    .split("")
    .reduce((a, b) => a + Number(b), 0);
}

function getMiddle(s) {
  return s.length % 2 === 1
    ? s.substring(s.length / 2 - 1, s.length / 2 + 1)
    : s.substring((Math.floor(s.length / 2), s.length / 2 + 1));
}

function XO(str) {
  let count1 = 0;
  let count2 = 0;

  for (const i of str.toLowerCase()) {
    i === "o" ? count1++ : 0;
    i === "x" ? count2++ : 0;
  }

  return count2;
}
alert(1n + 2);

//? Simple Fun #182: Happy "g"

function gHappy(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "g") {
      if (
        (i > 0 && str[i - 1] === "g") ||
        (i < str.length - 1 && str[i + 1] === "g")
      ) {
        continue;
      } else {
        return false;
      }
    }
  }

  return true;
}

// const gHappy = str => !/([^g]|^)g([^g]|$)/.test(str)

function sortReindeer(reindeerNames) {
  return reindeerNames.sort((a, b) => {
    const lastNameA = a.split(" ")[1];
    const lastNameB = b.split(" ")[1];

    if (lastNameA < lastNameB) {
      return -1;
    } else if (lastNameA > lastNameB) {
      return 1;
    } else {
      return 0;
    }
  });
}

//reindeerNames.sort((a, b) => a.split(' ')[1].localeCompare(b.split(' ')[1]));

if (a === b) {
  return 0;
} else if (a.match(/^[a-zA-Z]+$/) || b.match(/^[a-zA-Z]+$/)) {
  return -1;
}
return 1;

let arr = [1, 2, 3, 4, 5, 6, -1, -2, -3, -4, -5, -6];

function getSubArr(arr) {
  let max = 0;
  let curr = 0;

  for (const el of arr) {
    curr += el;

    max = Math.max(max, curr);

    if (curr < 0) {
      curr = 0;
    }
  }

  return max;
}
