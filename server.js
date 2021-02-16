const express = require("express");
const dotenv = require("dotenv");

// Load ENV
dotenv.config({ path: "./config.env" });

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Running in ${process.env.NODE_ENV} mode on Port${PORT}`);
});
