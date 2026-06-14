// Problem 21: Factorial (Recursive)  [Easy]
// Description: Write a recursive function factorial(n) that returns the factorial of a non-negative integer n.
// Example:
// Input: 5  → Output: 120 (5×4×3×2×1)Input: 0  → Output: 1
// Hint: Base case: factorial(0) = 1. Recursive case: n * factorial(n-1).

//  Answer of the Problem 21 :
// function factorial(n) {
//   let total = 1;
//   for (let i = 1; i <= n; i++) {
//     total = total * i;
//   }
//   return total;
// }
// console.log(factorial(5));

function factorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));
// Problem 22: Fibonacci Sequence  [Easy]
// Description: Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence.
// Example:
// Input: 6  → Output: 8 (0,1,1,2,3,5,8...)
// Hint: Try both iterative and recursive approaches.

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    let total = a + b;
    a = b;
    b = total;
  }
  return b;
}
console.log(fibonacci(8));

// console.log(fibonacci(6));

// Problem 23: Create a Counter with Closure  [Medium]
// Description: Write a function makeCounter() that returns an object with increment, increment, and getCount methods using closure.
// Example:
// const c = makeCounter();c.increment(); c.decrement();c.getCount(); // 2
// Hint: Use a variable inside the outer function that inner functions can access.

// Answer of the Problem 23 :
function makeCounter(n) {
  let count = 0;
  return {
    increment() {
      count++;
    },
    increment() {
      count++;
    },
    getCount() {
      return count;
    },
  };
}

const c = makeCounter();
c.increment();
c.increment();
c.increment();
// c.decrement();
// c.increment();
// c.getCount();

console.log(c.getCount());

// console.log(makeCounter(5));
// Answer of the problem 23 :
// function makeCounter() {}
// console.log(makeCounter(2));

// Problem 24: Curry a Function  [Medium]
// Description: Write a function curry(fn) that converts a function of two arguments into a curried version.
// Example:
// const add = curry((a,b) => a+b);add(2)(3); // 5
// Hint: Return a function from inside a function.

//Answer Of the Problem 24 :
function curry(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}
const add = curry((a, b) => a + b);

console.log(add(2)(3));
// function curry(fn){

// }

// Problem 25: Memoize a Function  [Medium]
// Description: Write a function memoize(fn) that caches the results of a function so repeated calls with the same input return the cached result.
// Example:
// const memoAdd = memoize(n => n + 10);memoAdd(5); // 15 (computed)memoAdd(5); // 15 (from cache)
// Hint: Use an object as a cache inside the outer function.

// function memoize(fn){

// }
// Answer of the problem 25 :
function memoize(fn) {
  let cache = {};

  return function (n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }

    let result = fn(n);

    cache[n] = result;

    return result;
  };
}
// const memoAdd = memoize((n) => {
//   // console.log("Calculating...");
//   return n + 10;
// });
const memoAdd = memoize((n) => n + 10);
console.log(memoAdd(5));
// console.log(memoAdd(5));
