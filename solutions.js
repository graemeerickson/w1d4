// Function Problems With Scope

// # 1 
// Write a function `printCool` that accepts one parameter, `name` as an argument. The function should print the name and a message saying that that person is cool.
const printCool = (name) => {
   return `${name} is cool`;
}
console.log(printCool("Captain Reynolds"));

// # 2
// Write a function `calculateCube` that takes a single number and prints the volume of a cube made from that number.
const calculateCube = (num) => {
   return Math.pow(num,3);
}
console.log(calculateCube(5));

// # 3
// Write a function `isAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
const isAVowel = (character) => {
   return /[aeiou]/.test(character);
}
console.log(isAVowel("a"));

// # 4
// Write a function `getTwoLengths` that accepts two parameters (strings). The function should return an _array_ of numbers where each number is the length of the corresponding string.
const getTwoLengths = (str1, str2) => {
   let strArr = [];
   strArr.push(str1.length, str2.length);
   return strArr;
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// # 5 
// Write a function `getMultipleLengths` that accepts a single parameter as an argument: an **array** of **strings**. The function should return an array of **numbers** where each number is the length of the corresponding string.
const getMultipleLengths = (arr) => {
   let strArr = [];
   arr.map(val => {
      strArr.push(val.length);
   });
   return strArr;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// alternative method: forEach
const getMultipleLengths2 = (arr) => {
   let strArr = [];
   arr.forEach(val => {
      strArr.push(val.length);
   });
   return strArr;
}
console.log(getMultipleLengths2(["hello", "what", "is", "up", "dude"]));

// # 6
// Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.
// Using Rest parameters!! :)
const maxOfThree = (...numbers) => {
   const nums = [numbers];
   const sortedNums = nums.sort((a,b) => {
      return a>b;
   });
   return sortedNums.pop();
}
console.log(maxOfThree(6, 9, 1));

// # 7
// Write a function `printLongestWord` that accepts a single argument, an **array** of **strings**. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
const printLongestWord = (arr) => {
   let longestWord = arr[0];
   arr.forEach(val => {
      if (val.length > longestWord.length) {
         longestWord = val;
      };
   });
   return longestWord;
};
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// # 8
// Write a Javascript function called `transmogrify`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result. The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number. For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the power of 2` is 225.
const transmogrify = (num1, num2, num3) => {
   return Math.pow(num1 * num2, num3);
};
console.log(transmogrify(5, 3, 2));

// # 9
// [Project Euler problem #2](https://projecteuler.net/problem=2)
// Write a function that takes a parameter, a number. The function should print the Fibonacci sequence up to that number.
const fibonacci = (num) => {
   let fibSequence = 0;
   let prev = 0;
   let curr = 1;
   let fibSequenceStr = "";
   while (num > 0) {
      fibSequence = curr;
      curr = prev + curr;
      prev = fibSequence;
      num--;
      fibSequenceStr += fibSequence + " ";
   };
   return fibSequenceStr;
};
console.log(fibonacci(6));

// Adjust the function to push the **even numbered** values into an array.
const fibonacciEven = (num) => {
   let fibSequence = 0;
   let prev = 0;
   let curr = 1;
   let fibSequenceStr = "";
   let fibSequenceEvenNumbersArr = [];
   while (num > 0) {
      fibSequence = curr;
      curr = prev + curr;
      prev = fibSequence;
      num--;
      fibSequenceStr += fibSequence + " ";
      if (fibSequence % 2 === 0) {
         fibSequenceEvenNumbersArr.push(fibSequence)
      };
   };
   return fibSequenceEvenNumbersArr;
};
console.log(fibonacciEven(6));

// Adjust the function to return the summed value of the array.
const fibonacciEvenSum = (num) => {
   let fibSequence = 0;
   let prev = 0;
   let curr = 1;
   let fibSequenceStr = "";
   let fibSequenceArr = [];
   while (num > 0) {
      fibSequence = curr;
      curr = prev + curr;
      prev = fibSequence;
      num--;
      fibSequenceStr += fibSequence + " ";
      if (fibSequence % 2 === 0) {
         fibSequenceArr.push(fibSequence)
      };
   };
   const arrSum = fibSequenceArr.reduce( (total, amount) => total + amount);
   return arrSum;
};
console.log(fibonacciEvenSum(16));

// * Find the sum of the even numbered values that do not exceed four million.
