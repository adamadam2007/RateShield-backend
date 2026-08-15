const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  business: { type: mongoose.Schema.Types.ObjectId, ref: "Business", required: true },
  productName: { type: String, required: true, trim: true },
  category: { type: String, trim: true },
  supplierCost: { type: Number, required: true, min: 0 },
  stockQuantity: { type: Number, default: 0, min: 0 },
  approvedPrice: { type: Number, default: 0, min: 0 },
  lastUpdated: { type: Date, default: Date.now }
}, { timestamps: true });
module.exports = mongoose.model("Product", productSchema);
