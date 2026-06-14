// Problem 26: Destructure and Rename  [Easy]
// Description: Given a user object, use destructuring to extract firstName, lastName, and age, renaming firstName to name.
// Example:
// const user = {firstName:'Sara', lastName:'Khan', age:25};// Extract: name='Sara', lastName='Khan', age=25
// Hint: Use: const { firstName: name, lastName, age } = user;

// Answer of the problem 26 :
const user1 = { firstName: "Sara", lastName: "Khan", age: 25 };
const { firstName: name, lastName, age } = user1;
console.log(age);

// Problem 27: Merge Arrays with Spread  [Easy]
// Description: Write a function mergeArrays(...arrays) that accepts any number of arrays and merges them into one using the spread operator.
// Example:
// Input: [1,2], [3,4], [5]Output: [1,2,3,4,5]
// Hint: Use rest parameters and spread inside reduce or flat.

// Answer of the problem 27 :

function mergeArrays(...arrays) {
  return arrays.flat();
}
console.log(mergeArrays([1, 2], [3, 4], [5]));

// Problem 28: Promise Chain  [Medium]
// Description: Write a function delay(ms) that returns a Promise that resolves after ms milliseconds. Then chain two delays: first 1 second, then 2 seconds, logging a message after each.
// Example:
// delay(1000).then(() => { console.log('1 sec'); return delay(2000); }).then(() => console.log('3 sec total'));
// Hint: Use new Promise with setTimeout inside.

// Answer of the Problem 28:
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
delay(1000)
  .then(() => {
    console.log("1 sec");
    return delay(2000);
  })
  .then(() => {
    console.log("3 sec total");
  });
// Problem 29: Async/Await Fetch Simulation  [Medium]
// Description: Write an async function getUserData(id) that simulates fetching user data by awaiting a Promise that resolves after 500ms with a mock user object.
// Example:
// await getUserData(1);// returns {id:1, name:'Test User'}
// Hint: Use async/await with a Promise that wraps setTimeout.

// Answer of the Problem 29 :
async function getUserData(id) {
  const user = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: id,
        name: "Test User",
      });
    }, 500);
  });

  return user;
}
async function test() {
  const user = await getUserData(1);

  console.log(user);
}

test();
// Problem 30: Optional Chaining & Nullish Coalescing  [Easy]
// Description: Given a nested object that may have missing properties, safely access a deeply nested value using optional chaining (?.) and provide a default using nullish coalescing (??).
// Example:
// const user = {profile: null};const city = user?.profile?.address?.city ?? 'Unknown';// Output: 'Unknown'
// Hint: Chain ?. for each level; use ?? for the fallback.

// Answer Of the Problem 30 :
const user = { profile: null };
const city = user?.profile?.address?.city ?? "Unknown";
console.log(city);
