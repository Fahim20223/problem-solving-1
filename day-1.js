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

let a = 7;
if (a % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}
