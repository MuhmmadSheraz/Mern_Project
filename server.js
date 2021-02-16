const express = require("express");
const dotenv = require("dotenv");

// Load ENV
dotenv.config({ path: "./config.env" });

const app = express();

const PORT = process.env.PORT || 3000;

// Simple Routes In Express JS

// Get Request
app.get("/list", (req, res) => {
  //   res.send("Hello World"); //simple hello world
  //   res.json({ name: "Hello World Again" }); //get JSON DATA
  //   res.status(400).json({ success: false, msg: "404 Error" }); //Error
  res.status(200).json({ success: true, msg: "Hello World Again Sucessfully" }); //get With 200 Status Code
});
// POST Request
app.post("/list", (req, res) => {
  res.status(200).json({ success: true, msg: "New Doc Created" });
  // ***Same As ABove Get Request
});
// Put OR Updated Request
app.put("/list/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Doc Update Having Id of ${req.params.id}` });
  // ***Same As ABove Get Request
});
// Delete  Request
app.delete("/list/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Doc Having Id is Deleted ${req.params.id}` });
  // ***Same As ABove Get Request
});
// GET SPECIFC ITEM IN LIST REQUEST
app.get("/list/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Doc Having Specific Id ${req.params.id}` });
  // ***Same As ABove Get Request
});

app.post("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server Running in ${process.env.NODE_ENV} mode on Port${PORT}`);
});
