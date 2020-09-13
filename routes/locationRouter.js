

const express = require("express");
const router = express.Router();
const locationController = require("../controllers/locationController");

router.get("/distances", locationController.getDistances);

module.exports = (app) => app.use("/api/location", router);
