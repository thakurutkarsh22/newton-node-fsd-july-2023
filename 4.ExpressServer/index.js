const express = require("express");
const PORT = 8080;

const server = express();

server.get("/", (req, res) => {
  res.end("WELCOME TO HOME PAGE");
});

server.listen(PORT, () => {
  console.log("server is started at port number " + PORT);
});
