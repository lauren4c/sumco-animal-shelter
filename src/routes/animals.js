const express = require("express");
const router = express.Router();

const animalController = require("../controllers/animalController");

router.get("/api/animals", animalController.index);

module.exports = router;
