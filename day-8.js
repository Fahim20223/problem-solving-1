// Problem 36: Safe JSON Parse  [Easy]
// Description: Write a function safeJsonParse(str) that tries to parse a JSON string and returns the parsed value, or null if parsing fails — without throwing an error.
// Example:
// safeJsonParse('{"a":1}');  // {a: 1}safeJsonParse('bad json'); // null
// Hint: Use try/catch inside the function.

// Answer Of the Problem 36 :
function safeJsonParse(str) {
  try {
    return JSON.parse(str);
  } catch (err) {
    // console.log("Error");
    return null;
  }
}

console.log(safeJsonParse('{"a":1}'));
console.log(safeJsonParse({ a: 1 }));

// Problem 37: Retry a Promise  [Medium]
// Description: Write a function retry(fn, times) that calls an async function fn up to times times, retrying if it throws an error. Resolves on first success, rejects after all attempts fail.
// Example:
// await retry(unstableFetch, 3);// Tries up to 3 times before failing
// Hint: Use a loop with try/catch; only throw after all retries are exhausted.

// Answer of the Problem 37 :

async function retry(fn, times) {
  let finalError;

  for (let i = 0; i < times; i++) {
    try {
      return await fn();
    } catch (error) {
      finalError = error;
    }
  }
  throw finalError;
}

async function testing() {
  return "Hello";
}
retry(testing, 4).then(console.log);

//failing test :
async function test() {
  throw new Error("failed");
}
retry(test, 4).catch((error) => {
  console.log(error.message);
});
// console.log(retry(testing, 4));
// retry(testing, 3).catch((error) => {
//   console.log(error);
// });

// Problem 38: Implement Promise.all from Scratch  [Hard]
// Description: Write a function myPromiseAll(promises) that behaves like Promise.all — resolves with an array of results when all resolve, rejects immediately if any rejects.
// Example:
// myPromiseAll([p1, p2, p3]).then(results => console.log(results));
// Hint: Track resolved count and results array; reject on first failure.

// Answer Of the Problem 38 :
function myPromiseAll(promises) {
  return Promise.all(promises);
}
myPromiseAll([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
  Promise.resolve(4),
]).then(console.log);

// Problem 39: Flatten Object (Deep)  [Medium]
// Description: Write a function flattenObject(obj) that takes a deeply nested object and returns a flat object with dot-notation keys.
// Example:
// Input: {a: {b: {c: 1}}}Output: {'a.b.c': 1}
// Hint: Use recursion; build the key by joining parent keys with dots.

// Answer Of the Problem number 39 :

function flattenObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }

  return result;
}

// Example
const obj = {
  a: {
    b: {
      c: 1,
    },
  },
};

console.log(flattenObject(obj));
// { 'a.b.c': 1 }

// Problem 40: Group Array by Property  [Medium]
// Description: Write a function groupBy(arr, key) that groups an array of objects by a given property key.
// Example:
// groupBy([{type:'fruit',name:'apple'},{type:'veg',name:'carrot'},{type:'fruit',name:'mango'}], 'type')// {fruit: [...], veg: [...]}
// Hint: Use reduce() and build an object where each key maps to an array.

// Answer Of the Problem number 40 :

function groupBy(arr, key) {
  return arr.reduce((groups, item) => {
    const groupKey = item[key];

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }

    groups[groupKey].push(item);

    return groups;
  }, {});
}

// Example
const data = [
  { type: "fruit", name: "apple" },
  { type: "veg", name: "carrot" },
  { type: "fruit", name: "mango" },
];

console.log(groupBy(data, "type"));
