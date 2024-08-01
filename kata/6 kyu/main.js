//! Multiples of 3 or 5
//! If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//! Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//! Additionally, if the number is negative, return 0.
//! Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

//? Even or Odd Accessor

const target = function (n) {
  return n % 2 ? "Odd" : "Even";
};

const handler = {
  get(target, prop) {
    return target(prop);
  },
};

const evenOrOdd = new Proxy(target, handler);

// const evenOrOdd = new Proxy((n) => n % 2 ? 'Odd' : 'Even', {get: (f, n) => f(+n.toString())});

function createFunctions(n) {
  let callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function () {
      return i;
    });
  }

  return callbacks;
}

let callbacks = createFunctions(5);

// console.log(callbacks[4]());

// console.log(0 >= null);

//? Напишіть функцію camelize(str), яка перетворює такі рядки “my-short-string” в “myShortString”.

function camelize(str) {
  return str
    .split("-")
    .map((item, index) =>
      index === 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
}

// console.log(camelize("my-short-string"));

//? Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, шукає в ньому елементи більші-рівні a та менші-рівні b і віддає масив цих елементів.
//? Функція повинна повертати новий масив і не змінювати вихідний.

function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

// console.log(filterRange([1, 2, 3, 4, 5], 1, 4));

//? Напишіть функцію filterRangeInPlace(arr, a, b), яка приймає масив arr і видаляє з нього всі значення крім тих, які знаходяться між a і b. Тобто, перевірка має вигляд a ≤ arr[i] ≤ b.
//? Функція повинна змінювати поточний масив і нічого не повертати.

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [3, 1, 8, 5];
filterRangeInPlace(arr, 1, 6);

// console.log(arr);

//? Сортувати за спаданням

arr.sort((a, b) => b - a);
// console.log(arr);

//? Є масив рядків arr. Потрібно отримати відсортовану копію та залишити arr незміненим.
arr = ["HTML", "JavaScript", "CSS"];

function copySorted(array) {
  return array.slice().sort();
}

let sorted = copySorted(arr);
// console.log(sorted);

//? Сворити функцію-конструктор Calculator, яка створює «розширюваний» обʼєкт калькулятора.
//? Реалізувати метод calculate(str), який приймає рядок типу "1 + 2" в форматі «ЧИСЛО оператор ЧИСЛО» (розділені пробілами) і повертає результат. Метод повинен розуміти плюс + і мінус -.

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator();

// console.log(calc.calculate("5 + 3"));
calc.addMethod("*", (a, b) => a * b);
// console.log(calc.calculate("5 * 3"));

//? Є масив об’єктів user, і в кожному з них є user.name. Напишіть код, який перетворює їх в масив імен.

let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };

let users = [ivan, petro, mariya];

let names = users.map((item) => item.name);

// console.log(names);

//? Є масив обʼєктів user, і у кожного з обʼєктів є name, surname та id.
//? Напишіть код, який створить ще один масив обʼєктів з параметрами id й fullName, де fullName – складається з name та surname.

ivan = { name: "Іван", surname: "Іванко", id: 1 };
petro = { name: "Петро", surname: "Петренко", id: 2 };
mariya = { name: "Марія", surname: "Мрійко", id: 3 };

users = [ivan, petro, mariya];

let usersMapped = users.map((item) => ({
  fullName: `${item.name} ${item.surname}`,
  id: item.id,
}));

// console.log(usersMapped);

//? Напишіть функцію sortByAge(users), яка приймає масив обʼєктів з властивістю age і сортує їх по ньому.

ivan = { name: "Іван", age: 25 };
petro = { name: "Петро", age: 30 };
mariya = { name: "Марія", age: 28 };

arr = [petro, ivan, mariya];

function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

// console.log(sortByAge(arr));

//? Напишіть функцію shuffle(array), яка перемішує (випадковим чином переставляє) елементи масиву.

arr = [1, 2, 3];

function shuffle(array) {
  //for (let i = array.length - 1; i > 0; i--) {
  //   let j = Math.floor(Math.random() * (i + 1));
  //   [array[i], array[j]] = [array[j], array[i]];
  // }
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

shuffle(arr);

// console.log(arr);

//? Напишіть функцію getAverageAge(users), яка приймає масив об’єктів з властивістю age та повертає середній вік.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

arr = [john, pete, mary];

function getAverageAge(arr) {
  return arr.reduce((prev, user) => prev + user.age, 0) / arr.length;
}

// console.log(getAverageAge(arr));

//? Напишіть функцію unique(arr), яка повертає масив, що містить тільки унікальні елементи arr.

let strings = [
  "Привіт",
  "Світ",
  "Привіт",
  "Світ",
  "Привіт",
  "Привіт",
  "Світ",
  "Світ",
  ":-O",
];

function unique(arr) {
  let res = [];

  for (const el of arr) {
    !res.includes(el) ? res.push(el) : res;
  }

  return res;
}

// console.log(unique(strings));

//? Створіть функцію groupById(arr), яка створює з масиву об’єкт із ключом id та елементами масиву як значеннями.

users = [
  { id: "іван", name: "Іван Іванко", age: 20 },
  { id: "ганна", name: "Ганна Іванко", age: 24 },
  { id: "петро", name: "Петро Петренко", age: 31 },
];

function groupById(users) {
  // let res = {};

  // for (const user of users) {
  //   res[user.id] = user;
  // }

  // return res;

  return users.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

let usersById = groupById(users);

// console.log(usersById);

let range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let num of range) {
  // console.log(num);
}

let recipeMap = new Map([
  ["огірок", 500],
  ["помідори", 350],
  ["цибуля", 50],
]);

// console.log(recipeMap);

let map = new Map();

map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");

// console.log(map);

let set = new Set();

ivan = { name: "Іван" };
petro = { name: "Петро" };
let maria = { name: "Марія" };

set.add(ivan);
set.add(petro);
set.add(maria);
set.add(ivan);
set.add(maria);

// console.log(set.size);
// console.log(set.keys());

for (let user of set) {
  // console.log(user.name);
}

//? Створити функцію unique(arr), яка повинна повертати масив унікальних елементів arr.

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function unique(arr) {
  return Array.from(new Set(arr));
}

// console.log(unique(values));

//? Напишіть функцію aclean(arr), яка повертає масив без анаграм.

arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}

// console.log(aclean(arr));

//? Отримати масив ключів map.keys() в змінну

map = new Map();
map.set("name", "John");

let keys = Array.from(map.keys());
keys.push("more");

// console.log(keys);

//? Є об’єкт salaries з довільною кількістю властивостей, що містять заробітні плати.
//? Напишіть функцію sumSalaries(salaries), що повертає суму всіх зарплат за допомогою Object.values та циклуfor..of.
//? Якщо об’єкт salaries порожній, тоді результат повинен бути 0.

let salaries = {
  Іван: 100,
  Петро: 300,
  Марія: 250,
};

function sumSalaries(obj) {
  let sum = 0;

  for (const value of Object.values(obj)) {
    sum += value;
  }

  return sum;
}

// console.log(sumSalaries(salaries));

//? Напишіть функцію count(obj), що повертає кількість властивостей об’єкта

let user = {
  name: "Іван",
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}

// console.log(count(user));

//? Створіть функцію topSalary(salaries) яка повертає ім’я найбільш високооплачуваної особи.
//? Якщо об’єкт salaries пустий, функція повинна повернути null.
//? Якщо є кілька високооплачуваних осіб, поверніть будь-якого з них.

salaries = {
  Іван: 100,
  Петро: 300,
  Марія: 250,
};

function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = "";

  for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}

// console.log(topSalary(salaries));

//? Створити об’єкт Date на дату: 20 лютого 2012, 3:12 ранку. Часовий пояс є місцевим.

let date = new Date(2012, 1, 20, 3, 12);
// date = new Date("2012-02-20T03:12");

// console.log(date);

//? Напишіть функцію getWeekDay(date), щоб показати день тижня у короткому форматі: ‘ПН’, ‘ВТ’, ‘СР’, ‘ЧТ’, ‘ПТ’, ‘СБ’, ‘НД’.

date = new Date();

function getWeekDay(date) {
  let days = ["НД", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return days[date.getDay()];
}

console.log(date);

//? Європейські країни мають дні тижня, що починаються з понеділка (№ 1), потім вівторок (№ 2) та до неділі (№ 7). Напишіть функцію getLocalDay(date), що повертає “європейський” день тижня для date.

date = new Date(2012, 1, 19);

function getLocalDay(date) {
  let day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day;
}

console.log(getLocalDay(date));

//? Створіть функцію getDateAgo(date, days), щоб повернути день місяця, який був days днів після date.

date = new Date(2015, 0, 1);

function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

console.log(getDateAgo(date, 185));

//? Напишіть функцію getLastDayOfMonth(year, month), що повертає останній день місяця. Іноді це 30-е, 31-ше або навіть 28/29-е для лютого.

function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

console.log(getLastDayOfMonth(2012, 1));

//? Напишіть функцію getSecondsToday(), що повертає кількість секунд з початку сьогоднішнього дня.

function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - today;

  return Math.round(diff / 1000);

  //let d = new Date();
  // return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

console.log(getSecondsToday());

//? Створіть функцію getSecondsToTomorrow(), що повертає кількість секунд до завтра.

function getSecondsToTomorrow() {
  let today = new Date();
  let tomorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  );

  return Math.round((tomorrow - today) / 1000);

  //let d = new Date();
  // return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

console.log(getSecondsToTomorrow());

//? Напишіть функцію formatDate(date), яка повинна форматувати date наступним чином:

function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  year = year.toString();
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  if (diffSec < 1) {
    return "Now";
  } else if (diffMin < 1) {
    return `${diffSec} seconds ago`;
  } else if (diffHour < 1) {
    return `${diffMin} minutes ago`;
  } else {
    return `${day}.${month}.${year} ${hour}:${minutes}`;
  }
}

console.log(formatDate(new Date(new Date() - 86400 * 1000)));
