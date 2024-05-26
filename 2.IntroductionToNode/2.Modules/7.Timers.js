// TIMERS
// --------------- 1. setTimeout
/*
console.log("a");

setTimeout(() => {
  console.log("c");
}, 0);

console.log("b");
*/

/*
    Answer
    a
    b
    c

*/

// --------------- 2. setInterval
/*
console.log("a");

setInterval(() => {
  console.log("b");
}, 1000);
console.log("c");

*/

/*
    Answer
    a
    c
    b

*/

// --------------- 3. setImmediate

/*
console.log("a");

setImmediate(() => {
  console.log("hello");
});

console.log("B");
*/

/*
    Answer
    a
    b
    Hello

*/
