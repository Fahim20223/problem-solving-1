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

// Problem 8: Check Palindrome  [Easy]
// Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
// Example:
// Input: 'racecar'  → Output: trueInput: 'hello'    → Output: false
// Hint: Compare the string to its reverse.

// Answer of the Problem-8 :
function isPalindrome(str) {
  const revers = str.split("").reverse().join("");
  return str === revers;
}
console.log(isPalindrome("racecar"));

// Problem 9: Capitalize First Letter of Each Word  [Easy]
// Description: Write a function titleCase(str) that capitalizes the first letter of every word in a string.
// Example:
// Input: 'hello world'  → Output: 'Hello World'
// Hint: Use split(' '), map(), and join(' ').

// Answer of the problem 9 :
function titleCase(str) {
  return str
    .split(" ")
    .map((siu) => siu[0].toUpperCase() + siu.slice(1))
    .join(" ");
}
console.log(titleCase("hello world"));

// Problem 10: Count Occurrences of a Character  [Easy]
// Description: Write a function countChar(str, char) that returns how many times a character appears in a string.
// Example:
// Input: 'banana', 'a'  → Output: 3
// Hint: Use split(char).length - 1 or a loop.

// Answer of the Problem 10 :
function countChar(str, char) {
  return str.split(char).length - 1;
}
console.log(countChar("banana", "a"));
