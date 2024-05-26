// Activity 1

/*
console.log("1");
process.nextTick(() => console.log("this is process 1"));
console.log("2");
*/

/*
    Answer
    1
    2
    this is procces 1

*/

// Activity 2
/*
console.log("a");
process.nextTick(() => console.log("this is process 1"));
process.nextTick(() => console.log("this is process 2"));
console.log("b");
*/

/*
    Answer
    a
    b
    process1
    proceess2
*/

// Activity 3
/*
console.log("a");
process.nextTick(() => {
  console.log("this is process 1");

  process.nextTick(() => {
    console.log("this is process 1.1 inside process 1");
  });
});
process.nextTick(() => {
  console.log("this is process 2");
});

console.log("b");
*/

/*
    Answer
    a
    b
    this is process 1
    this is process 2
    this is process 1.1 inside process 1
*/

// Activity 4

/*
console.log("a");

Promise.resolve().then((data) => {
  console.log("this is Promise 1");
});

console.log("b");
*/

/*
    Answer
    a
    b
    this is promise 1
*/

// Activity 5

/*
console.log("a");

process.nextTick(() => console.log("this is process 1"));

Promise.resolve().then((data) => {
  console.log("this is Promise 1");
});

process.nextTick(() => console.log("this is process 2"));

console.log("b");
*/

/*
    Answer
    a
    b
    this is process 1
    this is process 2
    this is Promise 1
*/

// Activity 6

/*
console.log("a");

setTimeout(() => {
  console.log("settimeout 1");
}, 0);

setTimeout(() => {
  console.log("settimeout 2");
}, 0);

setTimeout(() => {
  console.log("settimeout 3");
}, 0);

process.nextTick(() => console.log("this is process 1"));
process.nextTick(() => console.log("this is process 2"));
process.nextTick(() => {
  console.log("this is process 3");

  process.nextTick(() => {
    console.log("this is process 3.1 inside the process 3");
  });
});

console.log("b");
*/

/*
    Answer
    a
    b
    process1
    process2
    process3
    process3.1

    settimeout 1
    settimeout 2
    settimeout 3
*/

// Activity 7

/*
console.log("a");
setTimeout(() => {
  console.log("settimeout 1");

  process.nextTick(() => {
    console.log("process 1.1 inside settimeout 1");
  });
}, 0);

setTimeout(() => {
  console.log("settimeout 2");
});

process.nextTick(() => {
  console.log("process 2");
});

console.log("b");
*/

/*
    Answer
    a
    b
    process 2
    settimeout 1
    process 1.1 inside settimeout 1
    settimeout 2
*/

// Activity 8
/*
const fs = require("node:fs");

console.log("a");

fs.readFile("./file.txt", (error, data) => {
  console.log("this is readfile 1");
});

setTimeout(() => {
  console.log("settimeout ");
}, 0);

console.log("b");
*/

/*
    Answer:
    a
    b
    settimeout 
    this is readfile 1


*/

// Activity 9

/*
const fs = require("node:fs");

console.log("a");

fs.readFile("./file.txt", (error, data) => {
  console.log("this is readfile 1");
});

process.nextTick(() => {
  console.log("this is process 1");
});

Promise.resolve().then(() => {
  console.log("this is promise 1");
});

setTimeout(() => {
  console.log("settimeout 1");
}, 0);

console.log("b");
*/

/*
    Answer:
    a
    b
    this is process 1
    this is promise 1
    settimeout 
    this is readfile 1
*/

// Activity 10

/*
const fs = require("node:fs");

console.log("a");

setTimeout(() => {
  console.log("set timeout 1");
});

process.nextTick(() => {
  console.log("process nexttick 1");
});

setImmediate(() => {
  console.log("set immediate 1");
},0);

fs.readFile("./file.txt", (error, data) => {
  console.log("this is readfile 1");
});

console.log("b");
*/

/*
    Answer
    a
    b
    process nexttick 1
    set timeout 1
    set immediate 1
    this is readfile 1
*/

// Activity 11

/*
const fs = require("node:fs");

console.log("a");

fs.readFile("./file.txt", (error, data) => {
  console.log("this is readfile 1");
});

process.nextTick(() => {
  console.log("process nexttick 1");
});

Promise.resolve().then((data) => {
  console.log("this is Promise 1");
});

setTimeout(() => {
  console.log("set timeout 1");
}, 0);

setImmediate(() => {
  console.log("set immediate 1");
});

console.log("b");

*/

/*
    Answer
    a
    b
    process nexttick 1
    this is Promise 1
    set timeout 1
    set immediate 1
    this is readfile 1


*/
