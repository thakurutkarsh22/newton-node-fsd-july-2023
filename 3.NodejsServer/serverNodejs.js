const http = require("node:http");

// req - > request
// res -> response
const server = http.createServer((req, res) => {
  console.log("server is up and running and we can get response ");

  const url = req.url;
  const method = req.method;

  if (url === "/") {
    if (method === "GET") {
      res.end("WELCOME TO HOME PAGE");
    } else {
      res.statusCode = 404;
      res.end("BAD REQUEST");
    }
  } else if (url === "/fitness") {
    res.end("FITNESS FREAK");
  } else if (url === "/abouts") {
    res.write("Contact: 8938738282");
    res.write("\nMail: abc@gmail.com");
    res.end("\nFeel free to connect");
    res.write("\nthis will not work");
  } else {
    res.end("\nNotthing to see here");
  }
});

server.listen(8080, () => {
  console.log("server is listing fine", 8080);
});

/*
    res.end -> denotes the end of reply by the server to the client (and this is IMPORTANT) 
    otherwise the Client will infinitely load and load and load....

*/
