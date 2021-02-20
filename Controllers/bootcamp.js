const Bootcamp = require("../Models/Bootcamp");
const ErrorResponse = require("../Utils/error.js");
// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const getAllBootcamps = await Bootcamp.find({});

    res.status(200).json({
      success: true,
      msg: getAllBootcamps,
      NumberOfBootcamps: getAllBootcamps.length,
      middlewareData: req.middlewareData,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
    console.log("Get err====>", err);
  }
};

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return next(
        new ErrorResponse(
          `Bootcamp Not Found Having Id of ${req.params.id}`,
          404
        )
      );
    }
    res.status(200).json({
      success: true,
      msg: bootcamp,
    });
  } catch (err) {
    next(err);
  }
};

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const creation = await Bootcamp.create(req.body);
    res.status(200).json({ success: true, msg: creation });
  } catch (err) {
    next(err);
  }
};

// / @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
exports.updateBootcamp = async (req, res, next) => {
  try {
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
  } catch (err) {
    console.log("Delete Error===>", err);
  }
};

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(
        (400).json({
          success: false,
        })
      );
    }
    res.status(200).json({ success: true, msg: "Deleted" });
  } catch (err) {
    console.log("Delete Error===>", err);
  }
  res
    .status(200)
    .json({ success: true, msg: `Delete Bootcamo Having ID ${req.params.id}` });
};
