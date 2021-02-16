const express = require("express");
const dotenv = require("dotenv");
// Import Routes
const index = require("./Routes/routes");

// Import Middle Wares
const testMiddleware = require("./Middleware/testCustomMiddleware");
// Load ENV
dotenv.config({ path: "./config.env" });

const app = express();

  // Running Middleware
  app.use(testMiddleware)

// Mounting Routes
app.use("/api/v1/bootcamps", index); //Updating Router File with added Link the router  has acces of link which has been passed

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Running in ${process.env.NODE_ENV} mode on Port${PORT}`);
});
