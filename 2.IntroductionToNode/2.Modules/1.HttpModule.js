// ES6 -> import xyz from "./asda./asda./asda"
// CommonJS -> require.

const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("server is up and running and we can get response ");
  res.end("hello there guys");
});

server.listen(8080, () => {
  console.log("server is listing fine", 8080);
});
