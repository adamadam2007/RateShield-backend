const mongoose = require("mongoose");
const alertSchema = new mongoose.Schema({
  business: { type: mongoose.Schema.Types.ObjectId, ref: "Business", required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  alertType: { type: String, enum: ["Price Update", "Supplier Cost Change", "Exchange Rate Change", "Stock Warning"], default: "Price Update" },
  message: { type: String, required: true },
  status: { type: String, enum: ["Unread", "Read"], default: "Unread" }
}, { timestamps: true });
module.exports = mongoose.model("Alert", alertSchema);
