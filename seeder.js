const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load ENV Files
dotenv.config({ path: "./Config/config.env" });

// Load Models
const Bootcamp = require("./Models/Bootcamp");

// Connet DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Read JSON Files From Data Folder
const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, `utf-8`)
);

// Save All Data From Data Folder To DB
const SaveAllData = async () => {
  try {
    // console.log("======AlData===========", bootcamps);
    await Bootcamp.create(bootcamps);
    process.exit();
  } catch (err) {
    console.log("Error While Data Loading seeding===============", err.message);
  }
};
// Delete All Data From DB
const deleteAllData = async () => {
  try {
    await Bootcamp.deleteMany();
    console.log("Data Deleted Succcessfully From".cyan.inverse);
    process.exit();
  } catch (err) {
    console.log("Error While Data Deleting seeding".red.inverse);
  }
};

// Condition What We Want to Do
if (process.argv[2] === "_SaveData") {
  SaveAllData();
} else if (process.argv[2] === "_deleteData") {
  deleteAllData();
}
