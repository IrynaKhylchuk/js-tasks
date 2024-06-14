//! Create an array of 10 random numbers and write a few functions for working with it:

const task1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//? 1. The function accepts an array and displays it on the screen.

function displayArr(arr) {
  document.write(`<h1>Array is: ${arr}</h1>`);
}

displayArr(task1);

//? 2. The function accepts an array and outputs only even elements.

function displayEven(arr) {
  const result = [];

  for (const num of arr) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }

  document.write(`<h1>Even is: ${result}</h1>`);
}

displayEven(task1);

//? 3. The function accepts an array and returns the sum of all elements array.

function getSum(arr) {
  let result = 0;

  for (const num of arr) {
    result += num;
  }

  //   arr.reduce((a, b) => a + b, 0)

  document.write(`<h1>Sum is: ${result}</h1>`);
}

getSum(task1);

//? 4. The function accepts an array and returns its maximum element.

function getMax(arr) {
  document.write(`<h1>Max is: ${Math.max(...arr)}</h1>`);
}

getMax(task1);

//? 5. The function of adding a new element to the array as specified index.

function addElement(arr, index, element) {
  document.write(`<h1>Add: ${arr.toSpliced(index, 0, element)}</h1>`);
}

addElement(task1, 3, "hello");

//? 6. The function of removing an element from the array by the specified index.

function removeElementByIndex(arr, index) {
  arr.splice(index, 1);
  document.write(`<h1>Remove: ${arr}</h1>`);
}

removeElementByIndex(task1, 2);

//! Create another array of 5 random numbers and write the following functions:

const task2 = [1, 2, 3, 4, 5];

//? The function accepts 2 arrays and returns a new array that contains all the elements
//? of the two arrays without repetition.

function getNewArrWithoutDuplicates(arr1, arr2) {
  let result = [];

  result.push(arr1);

  for (const num2 of arr2) {
    if (!result.includes(num2) && !arr1.includes(num2)) {
      result.push(num2);
    }
  }

  document.write(`<h1>Result: ${result}</h1>`);
}

getNewArrWithoutDuplicates(task1, task2);

//? The function accepts 2 arrays and returns a new array that contains common elements
//? (that is, elements that occur in the first and second arrays) without repetitions.

function getNewArrWithDuplicates(arr1, arr2) {
  const result = [];

  for (const num1 of arr1) {
    if (arr2.includes(num1) && !result.includes(num1)) {
      result.push(num1);
    }
  }

  document.write(`<h1>Duplicates: ${result}</h1>`);
}

getNewArrWithDuplicates(task1, task2);

//? The function accepts 2 arrays and returns a new array that contains all elements from
//? the first array that are not into the second array.

function arrDifference(arr1, arr2) {
  const result = [];

  for (const num1 of arr1) {
    if (!arr2.includes(num1)) {
      result.push(num1);
    }
  }

  document.write(`<h1>Difference: ${result}</h1>`);
}

arrDifference(task1, task2);

//! Create an array of fruits and sort it alphabetically:

const task3 = ["apple", "orange", "pineapple", "strawberry"];
task3.sort();

//? Output to the screen using document.write() in the form of a list (using the ul and li tags).

function getListOfArr(arr) {
  let list = "<ul>";

  for (const e of arr) {
    list += `<li>${e}</li>`;
  }

  list += "</ul>";

  document.write(`List: ${list}`);
}

getListOfArr(task3);

//? Search for a fruit in an array. The function accepts the name of the fruit and
//? returns the index of the element found or -1 if not found. The search must be case-independent.

function findElementIndex(arr, fruit) {
  const result = arr.findIndex(
    (element) => element.toLowerCase() === fruit.toLowerCase()
  );

  document.write(`Index: ${result}`);
}

findElementIndex(task3, "apple");
