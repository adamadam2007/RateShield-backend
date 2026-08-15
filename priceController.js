const Product = require("../models/Product");
const PriceCalculation = require("../models/PriceCalculation");
const PriceHistory = require("../models/PriceHistory");
const calculateSuggestedPrice = async (req, res) => {
  try {
    const { productId, supplierCost, exchangeRate, profitMargin } = req.body;
    const suggestedPrice = supplierCost * (1 + profitMargin / 100);
    const calculation = await PriceCalculation.create({ product: productId, supplierCost, exchangeRate, profitMargin, suggestedPrice, status: "Pending" });
    res.status(201).json({ message: "Suggested price calculated", calculation });
  } catch (error) { res.status(500).json({ message: error.message }); }
};
const approvePrice = async (req, res) => {
  try {
    const { calculationId, approvedPrice, changedBy } = req.body;
    const calculation = await PriceCalculation.findById(calculationId);
    if (!calculation) return res.status(404).json({ message: "Calculation not found" });
    const product = await Product.findById(calculation.product);
    if (!product) return res.status(404).json({ message: "Product not found" });
    const oldPrice = product.approvedPrice || 0;
    product.approvedPrice = approvedPrice || calculation.suggestedPrice;
    product.lastUpdated = new Date();
    await product.save();
    calculation.status = approvedPrice ? "Edited" : "Approved";
    calculation.approvedBy = changedBy;
    await calculation.save();
    await PriceHistory.create({ product: product._id, oldPrice, newPrice: product.approvedPrice, changedBy });
    res.json({ message: "Price approved successfully", product, calculation });
  } catch (error) { res.status(500).json({ message: error.message }); }
};
const getPriceHistory = async (req, res) => { try { const history = await PriceHistory.find({ product: req.params.productId }).populate("product", "productName").populate("changedBy", "fullName email").sort({ createdAt: -1 }); res.json(history); } catch (error) { res.status(500).json({ message: error.message }); } };
module.exports = { calculateSuggestedPrice, approvePrice, getPriceHistory };
