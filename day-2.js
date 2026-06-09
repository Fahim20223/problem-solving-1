// Problem 6: Reverse a String  [Easy]
// Description: Write a function reverseString(str) that returns the reverse of a given string.
// Example:
// Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
// Hint: Use split(''), reverse(), and join('').

// Answer of the Problem-6:
function reverseString(str) {
  //   const reverse = str.split("");
  //   const reverse = str.split("").reverse();
  const reverse = str.split("").reverse().join("");

  return reverse;
}
console.log(reverseString("hello"));
