const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: "Hello World From All BootCamps Courses" });
});
router.post("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Add Course In Bootcamp " });
});
router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update Course Having Id ${req.params.id}` });
});
router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete Course Having Id ${req.params.id}` });
});
router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Single Course Having ID ${req.params.id}` });
});

module.exports = router;
