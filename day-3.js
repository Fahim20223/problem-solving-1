// Problem 11: Find the Sum of an Array  [Easy]
// Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.
// Example:
// Input: [1, 2, 3, 4, 5]  → Output: 15
// Hint: Use reduce() or a for loop.

//  Answer of the Problem 11 :
function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    // console.log(arr);
  }
  return total;
}
console.log(sumArray([1, 2, 2, 2, 2]));

// Problem 12: Find Maximum Value in Array  [Easy]
// Description: Write a function findMax(arr) that returns the largest number in an array without using Math.max().
// Example:
// Input: [3, 1, 7, 2, 9]  → Output: 9
// Hint: Loop through and track the largest value found.

//Answer of the Problem 12:

function findMax(arr) {
  let onTop = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > onTop) {
      onTop = arr[i];
    }
  }
  return onTop;
}
console.log(findMax([10, 2, 3, 4]));

// Problem 13: Remove Duplicates from Array  [Easy]
// Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
// Example:
// Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
// Hint: Use Set or filter() with indexOf().

// Answer of the problem 13 :
function removeDuplicates(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (!array.includes(element)) {
      array.push(element);
    }
  }
  return array;
}
console.log(removeDuplicates([1, 2, 2, 2, 2, 2, 43, 34, 43, 4, 4]));

// Problem 14: Flatten a Nested Array  [Medium]
// Description: Write a function flattenArray(arr) that flattens one level of a nested array.
// Example:
// Input: [1, [2, 3], [4, 5]]  → Output: [1, 2, 3, 4, 5]
// Hint: Use flat() or reduce() with concat().

function flattenArray(arr) {
  return arr.flat();
}
console.log(flattenArray([1, [2, 3], [4, 5]]));

// Problem 15: Chunk an Array  [Medium]
// Description: Write a function chunkArray(arr, size) that splits an array into chunks of a given size.
// Example:
// Input: [1,2,3,4,5], 2  → Output: [[1,2],[3,4],[5]]
// Hint: Use a while loop with slice().

function chunkArray(arr, size) {
  let chunk = [];
  let index = 0;
  while (index < arr.length) {
    chunk.push(arr.slice(index, index + size));
    index += size;
  }
  return chunk;
}
console.log(chunkArray([1, 2, 3, 4, 5], 2));
