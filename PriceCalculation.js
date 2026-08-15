const mongoose = require("mongoose");
const priceCalculationSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  supplierCost: { type: Number, required: true, min: 0 },
  exchangeRate: { type: Number, required: true, min: 0 },
  profitMargin: { type: Number, required: true, min: 0 },
  suggestedPrice: { type: Number, required: true, min: 0 },
  status: { type: String, enum: ["Pending", "Approved", "Edited"], default: "Pending" },
  approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });
module.exports = mongoose.model("PriceCalculation", priceCalculationSchema);
