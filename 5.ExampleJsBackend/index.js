// My main server FILE residers here

const express = require("express");
const server = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const homeRoute = require("./routes/home.routes");
const authRoute = require("./routes/auth.routes");
const blogRoute = require("./routes/blog.routes");

dotenv.config();

// MIDDLEWARE
// This will parse every incoming request to the server.
server.use(express.json());
server.use(cors()); // Allows the req to the server

// REGISTER ROUTES

server.use("/api/v1/home", homeRoute);
server.use("/api/v1/auth", authRoute);
server.use("/api/v1/blog", blogRoute);

// THIS IS DONE FOR THE BACKWORD COMPATIBILITY
// server.use("/api/v2/home", homev2);

// ATTACH DATABASE

// const connectionString = "mongodb://localhost:27017"; // DANGEEROUSSSS ...
const connectionString = process.env.MONGO_CONNECTION; // NOT dangerous (prefereed good practise)
const database = "/currencyExpressBackendProject";
mongoose
  .connect(connectionString + database)
  .then(() => {
    console.log("DB is connected");
  })
  .catch(() => {
    console.log("DB connection error!!");
  });

server.listen(8082, () => {
  console.log("running server port 8082");
});

/*
    env file is used to HIDE THE SENSITIVE INFORMATION

*/
