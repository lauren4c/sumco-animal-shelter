const express = require("express");
const router = express.Router();
var multer = require("multer");
var cors = require("cors");
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
var upload = multer({ storage });
const animalController = require("../controllers/animalController");

router.get("/api/animals", animalController.index);
router.get("/api/available_animals", animalController.availableAnimals);
router.get("/api/animals/:id", animalController.show);
router.post(
  "/api/animals/upload",
  upload.single("file"),
  animalController.upload
);
router.post("/api/animals/create", animalController.create);
router.post("/api/animals/:id/update", animalController.update);

module.exports = router;
