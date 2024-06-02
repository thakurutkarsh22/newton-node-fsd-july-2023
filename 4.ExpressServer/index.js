const express = require("express");
const PORT = 8080;

const server = express();

// express.json() is a middleware
// use -> GET, PUT, POST, DELETE ... any request.
// not using path means it is going to work for 100% of the INCOMING REQUEST.
server.use(express.json());

server.get("/", (req, res) => {
  res.statusCode = 200;
  res.end("WELCOME TO HOME PAGE");
});

// ---------- RESTFUL API: Representational State Transfer -------------

// ---- EXAMPLE OF QUERY PARAMS -----

server.get("/fitness", (req, res) => {
  const queryParams = req.query;
  console.log(queryParams);

  const { type = "gym" } = queryParams;

  if (type === "gym") {
    res.end("GYM FITNESS");
  } else if (type === "dance") {
    res.end("DANCE FITNESS");
  } else {
    res.end(" GENERAL FITNESS");
  }
});

// --------- EXAMPLE OF PARAMS --------------

server.get("/products/:id", (req, res) => {
  const id = req.params["id"];

  res.end("product for ID ::: " + id);
});

// --------- EXAMPLE OF BODY ----------------

server.post("/register/newuser", (req, res) => {
  const bodyobj = req.body;
  console.log(bodyobj, "body");

  res.end("Thanks for registration !!! " + bodyobj.name);
});

// --------- EXAMPLE OF ALL ROUTING (use supports all the METHODS) -----------

server.use("/contacts", (req, res) => {
  res.end("Hey there you are in the contact page");
});

server.post("/abouts", (req, res) => {
  res.end("abouts");
});

server.listen(PORT, () => {
  console.log("server is started at port number " + PORT);
});
