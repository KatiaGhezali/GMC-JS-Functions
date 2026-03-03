// String Manipulation Functions

// 1- Reverse a string

function reverseStr(str) {
  return str.split("").reverse().join("");
}

// 2- Count characters

function countChar(str) {
  return str.length;
}

// 3- Capitalize words

function capitalizeWords(sentence) {
  let words = sentence.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    result = result + word[0].toUpperCase() + word.slice(1);

    if (i < words.length - 1) {
      result = result + " ";
    }
  }
  return result;
}

// Array Functions:

// 1- Find Maximum and Minimum

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// 2- Sum of Array

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

// 3- Filter Array

function filterArr(arr, condition) {
  return arr.filter(condition);
}

// Mathematical Functions:

// 1- Factorial

function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  return result;
}

// 2- Prime Number Check

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// 3- Fibonacci Sequence

function Fibonacci(n) {
  let sequence = [];

  if (n <= 0) {
    return sequence;
  }
  if (n === 1) {
    return [0];
  }

  sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

// TESTS:

console.log(reverseStr("hello")); // olleh
console.log(countChar("hello")); // 5
console.log(capitalizeWords("hello world")); // "Hello World"

console.log(findMax([2, 5, 6, 9, 0])); // 9
console.log(sum([1, 5, 7])); //13
console.log(filterArr([1, 5, 3, 6], (x) => x > 3)); // [5,6]

console.log(factorial(5)); // 120
console.log(isPrime(7)); // true
console.log(Fibonacci(7)); // [0,1,1,2,3,5,8]
