// Problem 31: Debounce Function  [Medium]
// Description: Write a debounce(fn, delay) function that delays invoking fn until after delay milliseconds have elapsed since the last time it was called.
// Example:
// const debouncedSearch = debounce(search, 300);// Fires only once after user stops typing for 300ms
// Hint: Use clearTimeout and setTimeout.

// Answer Of the Problem of 31 :

// const debounce = (fn, delay) => {
//   let timer;

//   return () => {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn();
//     }, delay);
//   };
// };

const debounce = (fn, delay) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const search = (text) => {
  console.log(text);
};

const debouncedSearch = debounce(search, 300);

debouncedSearch("React");
debouncedSearch("React JS");
debouncedSearch("React JS Tutorial");

// const sayHi = () => {
//   console.log("Hi");
//   console.log("hil");
// };

// const debouncedHi = debounce(sayHi, 300);
// debouncedHi(); // timer start
// debouncedHi(); // old timer cancel
// debouncedHi(); // old timer cancel
// debouncedHi(); // old timer cancel

// Problem 32: Throttle Function  [Medium]
// Description: Write a throttle(fn, limit) function that ensures fn is called at most once every limit milliseconds.
// Example:
// const throttledScroll = throttle(onScroll, 200);// Fires at most once every 200ms during scroll
// Hint: Track the last call time with Date.now().

// Answer Of the Problem number 32 :

function throttle(fn, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}

// Example
function onScroll() {
  console.log("Scrolling...");
}

const throttledScroll = throttle(onScroll, 200);

// Fires at most once every 200ms=>>>>>>>>
window.addEventListener("scroll", throttledScroll);

// Problem 33: Deep Clone an Object  [Medium]
// Description: Write a function deepClone(obj) that returns a deep copy of a plain object without using JSON.parse/JSON.stringify.
// Example:
// const a = {x: {y: 1}};const b = deepClone(a);b.x.y = 99;// a.x.y is still 1
// Hint: Use recursion and check for object/array types.

// Answer Of the Problem number 33

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    clone[key] = deepClone(obj[key]);
  }

  return clone;
}

// Example
const a = {
  x: {
    y: 1,
  },
};

const b = deepClone(a);

b.x.y = 99;

console.log(a.x.y); // 1
console.log(b.x.y); // 99

// Problem 34: Event Emitter  [Medium]
// Description: Build a simple EventEmitter class with on(event, listener), emit(event, ...args), and off(event, listener) methods.
// Example:
// const emitter = new EventEmitter();emitter.on('greet', name => console.log('Hello ' + name));emitter.emit('greet', 'Sara'); // Hello Sara
// Hint: Store listeners in an object where keys are event names and values are arrays of functions.

// Problem 35: Implement Array.prototype.map from Scratch  [Medium]
// Description: Write a function myMap(arr, callback) that replicates the behavior of Array.prototype.map without using the built-in map().
// Example:
// myMap([1,2,3], x => x * 2);// Output: [2, 4, 6]
// Hint: Loop through the array, apply the callback to each element, push results to a new array.

// Answer Of the Problem 35:
function myMap(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }

  return result;
}
console.log(myMap([1, 2, 3], (x) => x * 2));
