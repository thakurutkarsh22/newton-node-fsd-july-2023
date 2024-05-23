const fs = require("node:fs");
// const fs = require("fs");

// ----------------------- ASYNC VERSION CRUD OPERATIONS --------------

// --------- CREATE A FILE -----------

/*
fs.appendFile(
  "./fileSystem/filesszzzz.txt",
  "Hi there Node Js WOrld !!!",
  (error) => {
    if (error) {
      console.log(error, "err orrrr utkarsh");
    }
  }
);
*/

// ---------- READ a FILE -------------

/*
fs.readFile("./fileSystem/filesszzzz.txt", (error, data) => {
  if (error) {
    console.log("here is reading error", error);
  } else {
    console.log("HERE MY FILE DATA ::::");

    // in here data is in Buffer FORMAT we need to convert it to string
    console.log(data);
    console.log(data.toString());
  }
});
*/

// ---------- UPDATE a FILE -------------

/*
fs.appendFile(
  "./fileSystem/filesszzzz.txt",
  "\n Name of students which are in tthe class",
  (error) => {
    if (error) {
      console.log("error in updating file");
    }
  }
);
*/
// ---------- DELETE a FILE -------------

/*
fs.unlink("./fileSystem/filesszzzz.txt", (error) => {
  if (error) {
    console.log("error", error);
  } else {
    console.log("file is deleted");
  }
});
*/

// ----------- RENAME a FILE ------------

/*
fs.rename(
  "./fileSystem/filesszzzz copy.txt",
  "./fileSystem/file.txt",
  (error) => {
    if (error) {
      console.log("error", error);
    } else {
      console.log("RENAME SUCCESSFULL");
    }
  }
);
*/

// ------- ASYNC -----------------------------

/*
console.log("1");

fs.readFile("./fileSystem/file.txt", (error, data) => {
  if (error) {
  } else {
    console.log(data.toString());
  }
});

console.log("3");

*/

/*
Answer::: 

1
3
Hi there Node Js WOrld !!!
 Name of students which are in tthe class

*/

// ------------------ SYNCHRONOUS ----------------

/*
console.log("1");

const bufferData = fs.readFileSync("./fileSystem/file.txt");
console.log(bufferData.toString(), "bufferData");

console.log("3");
*/

/*
  Answer

  1
  Hi there Node Js WOrld !!!
    Name of students which are in tthe class bufferData
  3
*/

/*
  NOTE
  1. We should Rarely use the SYNCHRONOUS version of any module in Nodejs 
  2. always try to use Async Version.

*/

/*
console.log("1");

const data = fs.renameSync("./fileSystem/file.txt", "./fileSystem/file2.txt");
console.log(data);

console.log("2");

*/
