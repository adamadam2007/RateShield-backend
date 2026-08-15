const mongoose = require("mongoose");
const businessSchema = new mongoose.Schema({
  businessName: { type: String, required: true, trim: true },
  businessType: { type: String, trim: true },
  location: { type: String, trim: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });
module.exports = mongoose.model("Business", businessSchema);
