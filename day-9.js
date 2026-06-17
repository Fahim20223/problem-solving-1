// Problem 41: Two Sum  [Easy]
// Description: Given an array of numbers and a target, write a function twoSum(arr, target) that returns the indices of the two numbers that add up to the target.
// Example:
// Input: [2, 7, 11, 15], target = 9 Output: [0, 1]  (because 2 + 7 = 9)
// Hint: Use a hash map to store visited values and their indices.

function towSum(arr, target) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    // const element = arr[i ];
    const sui = target - arr[i];

    if (map.hasOwnProperty(sui)) {
      return [map[sui], i];
    } else {
      map[arr[i]] = i;
    }
  }
}
console.log(towSum([2, 7, 11, 15], 9));

// Problem 42: Check Anagram  [Easy]
// Description: Write a function isAnagram(str1, str2) that returns true if the two strings are anagrams of each other.
// Example:
// Input: 'listen', 'silent'  → Output: trueInput: 'hello', 'world'   → Output: false
// Hint: Sort both strings and compare, or use a character frequency map.

// Answer Of the Problem 42 :
function isAnagram(str1, str2) {
  const sorting1 = str1.split("").sort().join("");
  const sorting2 = str2.split("").sort().join("");

  //   return (sorting1 = sorting2);
  return sorting1 == sorting2;
}

console.log(isAnagram("listen", "silent"));

console.log(isAnagram("hello", "world"));

// Problem 43: Find Missing Number  [Easy]
// Description: Given an array of n-1 integers from 1 to n with one number missing, write a function findMissing(arr, n) to find the missing number.
// Example:
// Input: [1,2,4,5], n=5  → Output: 3
// Hint: Use the formula: expected sum = n*(n+1)/2, then subtract actual sum.

// Answer Of the Problem 43 :
function findMissing(arr, n) {
  const sum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    // const element = arr[i ];
    actualSum += arr[i];
  }
  //   for (let number of arr) {
  //     actualSum += number;
  //   }
  return sum - actualSum;
}
console.log(findMissing([1, 2, 4, 5], 5));
// Problem 44: Valid Parentheses  [Medium]
// Description: Write a function isValidParentheses(str) that returns true if the string has valid, balanced parentheses, brackets, and braces.
// Example:
// Input: '()[]{}'  → Output: trueInput: '([)]'    → Output: false
// Hint: Use a stack (array). Push opening brackets, pop and compare for closing ones.

// Problem 45: Binary Search  [Medium]
// Description: Write a function binarySearch(arr, target) that searches a sorted array and returns the index of the target, or -1 if not found.
// Example:
// Input: [1,3,5,7,9], target=7  → Output: 3
// Hint: Use left and right pointers; check the middle element each iteration.
