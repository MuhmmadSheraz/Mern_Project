const ErrorResponse = require("../Utils/error");
const errorHanlder = (err, req, res, next) => {
  console.log("Error Hadler", err);
  let error = { ...err };
  error.message = err.message;
  // Id Error
  if (err.name === "CastError") {
    const message = `Bootcamp Not Found Having Id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }
  // Duplicates Field Value
  if (err.code == 11000) {
    const message = `${Object.keys(err.keyValue)} has Already Been Taken`;
    error = new ErrorResponse(message, 404);
  }

  // Missing Field Value
  if (err.name == "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 404);
  }

  res.status(err.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};
module.exports = errorHanlder;
