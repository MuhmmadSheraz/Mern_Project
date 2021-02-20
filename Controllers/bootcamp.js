const Bootcamp = require("../Models/Bootcamp");
const ErrorResponse = require("../Utils/error.js");
const asyncHandler = require("../Middleware/async.js");
// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const getAllBootcamps = await Bootcamp.find({});
  res.status(200).json({
    success: true,
    msg: getAllBootcamps,
    NumberOfBootcamps: getAllBootcamps.length,
    middlewareData: req.middlewareData,
  });
});

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp Not Found Having Id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    msg: bootcamp,
  });
});

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const creation = await Bootcamp.create(req.body);
  res.status(200).json({ success: true, msg: creation });
});

// / @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!bootcamp) {
    return res.status(
      (400).json({
        success: false,
      })
    );
  }
  res.status(200).json({ success: true, msg: "Updated" });
});

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
    return res.status(
      (400).json({
        success: false,
      })
    );
  }
  res.status(200).json({ success: true, msg: "Deleted" });
});
