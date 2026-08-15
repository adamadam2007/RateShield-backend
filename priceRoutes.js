const express = require("express");
const router = express.Router();
const { calculateSuggestedPrice, approvePrice, getPriceHistory } = require("../controllers/priceController");
router.post("/calculate", calculateSuggestedPrice);
router.post("/approve", approvePrice);
router.get("/history/:productId", getPriceHistory);
module.exports = router;
