//! 1 Write a function that takes 2 strings and compares them length.
//! The function returns:
//! 1 if in the first linemore characters than in the second;
//! -1 – if the second has more characters than the first;
//! 0 – if the lines are the same length.

function compareStringLengths(str1, str2) {
  if (str1.length > str2.length) {
    console.log("1");
  } else if (str1.length < str2.length) {
    console.log("-1");
  } else {
    console.log("0");
  }
}

compareStringLengths("hello", "world");

//! 2 Write a function that converts the first character of the passed string to upper case.

function convertsFirstCharacterToUpperCase(str) {
  console.log(str.charAt(0).toUpperCase() + str.substring(1));
}

convertsFirstCharacterToUpperCase("kjsdvnd vnvkjdfv dfjkv");

//! 3 Write a function that counts the number of vowels letters in the passed string.

function countNumberOfVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (const e of str.toLowerCase()) {
    vowels.includes(e) ? count++ : count;
  }

  console.log(count);
}

countNumberOfVowels("Hello, world!");

//!  4 Write a function to check for spam in transmitted line. The function returns true if the string contains spam.
//! The following words are considered spam: 100% free, upsell, today only, don't delete, xxx.
//! The function must be case insensitive.

function checkForSpam(str) {
  const spam = ["100% free", "upsell", "today only", "don't delete", "xxx"];

  for (const spamWord of spam) {
    if (str.toLowerCase().includes(spamWord)) {
      return true;
    }
  }

  return false;
}

console.log(checkForSpam("Get 100% free bonus now"));
console.log(checkForSpam("Check out our new products"));

//! 5 Write a string reduction function. The function accepts string and its maximum length. If the length of the
//! string is longer than the maximum, it is necessary to discard the extra ones characters by adding an ellipsis instead.
//! For example: truncate("Hello, world!", 8) should return "Hello...".

function truncate(str, number) {
  console.log(str.length > number ? str.slice(0, number - 3) + "..." : str);
}

truncate("Hello, world!", 8);

//! 6 Write a function that checks if the passed string exists palindrome.

function checkPalindrome(str) {
  console.log(
    str.toLowerCase() === str.toLowerCase().split("").reverse().join("")
  );
}

checkPalindrome("tenet");

//! 7 Write a function that counts the number of words in a sentence.

function countNumberOfWords(str) {
  console.log(str.split(" ").length);
}

countNumberOfWords("kjdfb dfvhkdf hvfd");

//! 8 Write a function that returns the longest word from a sentence.

function getLongestWord(str) {
  let result = "";

  for (const word of str.split(" ")) {
    result.length < word.length ? (result = word) : result;
  }

  return result;
}

console.log(getLongestWord("o oo ooo oooo ooooo"));

//! 9 Write a function that calculates the average length words in a sentence.

function calculateAverageLengthWords(str) {
  let total = 0;

  for (const word of str.split(" ")) {
    total += word.length;
  }

  console.log(Math.round(total / str.split(" ").length));
}

calculateAverageLengthWords("0 00 000 0000 00000");

//! Write a function that accepts a string and a character and outputsindices at which this character is located in the string.
//! Also output how many times this character occurs in a string.

function findCharacterIndices(str, character) {
  let indexes = [];
  let numberOfIndexes = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === character) {
      indexes.push(i);
      numberOfIndexes++;
    }
  }

  console.log(indexes, numberOfIndexes);
}

findCharacterIndices("djvdfkjvndf", "d");
