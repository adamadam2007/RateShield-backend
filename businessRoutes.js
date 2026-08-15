const express = require("express");
const router = express.Router();
const { createBusiness, getBusinesses, getBusinessById } = require("../controllers/businessController");
router.post("/", createBusiness);
router.get("/", getBusinesses);
router.get("/:id", getBusinessById);
module.exports = router;
