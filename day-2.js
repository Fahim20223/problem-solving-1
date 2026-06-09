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

// Problem 7: Count Vowels in a String  [Easy]
// Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string.
// Example:
// Input: 'hello'   → Output: 2Input: 'javascript' → Output: 3
// Hint: Use a loop or match() with a regular expression.

// Answer of the Problem 7 :

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let countIt = 0;
  for (const element of str) {
    if (vowels.includes(element)) {
      countIt++;
    }
  }
  return countIt;
}
console.log(countVowels("javascript"));
