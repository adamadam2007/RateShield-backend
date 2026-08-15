const express = require("express");
const router = express.Router();
const { createAlert, getAlerts, markAlertAsRead } = require("../controllers/alertController");
router.post("/", createAlert);
router.get("/", getAlerts);
router.put("/:id/read", markAlertAsRead);
module.exports = router;
