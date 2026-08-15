const mongoose = require("mongoose");
const priceHistorySchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  oldPrice: { type: Number, default: 0 },
  newPrice: { type: Number, required: true },
  changedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });
module.exports = mongoose.model("PriceHistory", priceHistorySchema);
