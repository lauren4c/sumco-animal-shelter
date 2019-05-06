const express = require("express");
const router = express.Router();

const animalController = require("../controllers/animalController");

router.get("/api/animals", animalController.index);
router.get("/api/animals/:id", animalController.show);
router.post("/api/animals/upload", animalController.upload);
router.post("/api/animals/create", animalController.create);

module.exports = router;
