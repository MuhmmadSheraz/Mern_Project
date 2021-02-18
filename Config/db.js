const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      //   To Avoid Warning
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("Mongo DB CONFIGURED");
  }catch(err){
      console.log("Mongo DB Cofig Failed")
  }
};

module.exports = connectDB;
