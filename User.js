const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["Business Owner", "Cashier", "Supplier Manager", "Platform Admin"], default: "Business Owner" },
  business: { type: mongoose.Schema.Types.ObjectId, ref: "Business" }
}, { timestamps: true });
module.exports = mongoose.model("User", userSchema);
