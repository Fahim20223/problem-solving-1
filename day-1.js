// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10 Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

// Answer of Problem 1 :
const a = 5;
const b = 10;

function destructure(a, b) {
  // [a, b] = [5, 10];
  [a, b] = [b, a];

  return { a, b };
  // console.log(destructure(a, b));
}
console.log(destructure(a, b));
