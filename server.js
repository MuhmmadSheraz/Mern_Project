const express = require("express");
const dotenv = require("dotenv");
const Color = require('color');
// Errror Middle Ware
const errorHanlder = require("./Middleware/error");
// Import Routes
const index = require("./Routes/routes");
const connectDB = require("./Config/db");
// Import Middle Wares
const testMiddleware = require("./Middleware/testCustomMiddleware");
// Load ENV
dotenv.config({ path: "./Config/config.env" });

//  Connect Mongo DB
connectDB();

const app = express();

// Running Middleware

// Body Parser
app.use(express.json());

// Mounting Routes
app.use("/api/v1/bootcamps", index); //Updating Router File with added Link the router  has acces of link which has been passed

// Running Error Middleware
app.use(errorHanlder);
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server Running in ${process.env.NODE_ENV} mode on Port${PORT}`);
});

// Global Promise Rejection Hanlder
process.on("unhandledRejection", () => {
  console.log("Error While Handle Rejection");
  server.close(() => process.exit(1));
});
