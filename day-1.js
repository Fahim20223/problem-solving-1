// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10 Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

// Answer of Problem 1 :
// const a = 5;
// const b = 10;

// function destructure(a, b) {
//   // [a, b] = [5, 10];
//   [a, b] = [b, a];

//   return { a, b };
//   // console.log(destructure(a, b));
// }
// console.log(destructure(a, b));

// let a = 4;
// let b = 9;
// [a, b] = [b, a];
// console.log("a:", a, "b:", b);

// Problem 2: Check Even or Odd  [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: trueInput: 7  → Output: false
// Hint: Use the modulus (%) operator.

//  Answer of Problem -2 :

// let a = 7;
// if (a % 2 === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// function isEven(n){
//   if(n%2===0){
//     console.log(true)
//   } return {console.log(false)}

// }

// Problem 3: Find the Largest of Three Numbers  [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.
// Example:
// Input: 3, 7, 5  → Output: 7
// Hint: Use Math.max() or if-else conditions.

//Answer of the Problem-3:
// function largest(a, b, c) {
//   return Math.max(a, b, c);
// }
// console.log(largest(3, 5, 8));

// Problem 4: Celsius to Fahrenheit  [Easy]
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
// Example:
// Input: 0   → Output: 32Input: 100 → Output: 212
// Hint: Formula: (C × 9/5) + 32

// Answer of the Problem-4:

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(toFahrenheit(100));

// Problem 5: Check Positive, Negative or Zero  [Easy]
// Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
// Example:
// Input: -5  → Output: 'negative'Input: 0   → Output: 'zero'
// Hint: Use if-else if-else statements.

// Answer of the Problem-5:

// function checkSign(n) {
//   if (n === 0) {
//     return "zero";
//   }
//   if (n > 0) {
//     return "positive";
//   } else {
//     return "negative";
//   }
// }
// console.log(checkSign(0));
