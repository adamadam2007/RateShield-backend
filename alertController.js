const Alert = require("../models/Alert");
const createAlert = async (req, res) => { try { res.status(201).json(await Alert.create(req.body)); } catch (error) { res.status(500).json({ message: error.message }); } };
const getAlerts = async (req, res) => { try { const filter = req.query.business ? { business: req.query.business } : {}; res.json(await Alert.find(filter).populate("business", "businessName").populate("product", "productName").sort({ createdAt: -1 })); } catch (error) { res.status(500).json({ message: error.message }); } };
const markAlertAsRead = async (req, res) => { try { const alert = await Alert.findByIdAndUpdate(req.params.id, { status: "Read" }, { new: true }); if (!alert) return res.status(404).json({ message: "Alert not found" }); res.json(alert); } catch (error) { res.status(500).json({ message: error.message }); } };
module.exports = { createAlert, getAlerts, markAlertAsRead };
