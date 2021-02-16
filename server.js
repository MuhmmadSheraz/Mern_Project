const express = require("express");
const dotenv = require("dotenv");
// Import Routes
const index = require("./Routes/routes");

// Load ENV
dotenv.config({ path: "./config.env" });

const app = express();

// Mounting Routes
app.use("/api/v1/bootcamps", index); //Updating Router File with added Link the router  has acces of link which has been passed

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Running in ${process.env.NODE_ENV} mode on Port${PORT}`);
});
