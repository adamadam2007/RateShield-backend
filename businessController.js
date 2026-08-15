const Business = require("../models/Business");
const createBusiness = async (req, res) => { try { res.status(201).json(await Business.create(req.body)); } catch (error) { res.status(500).json({ message: error.message }); } };
const getBusinesses = async (req, res) => { try { res.json(await Business.find().populate("owner", "fullName email role")); } catch (error) { res.status(500).json({ message: error.message }); } };
const getBusinessById = async (req, res) => { try { const business = await Business.findById(req.params.id).populate("owner", "fullName email role"); if (!business) return res.status(404).json({ message: "Business not found" }); res.json(business); } catch (error) { res.status(500).json({ message: error.message }); } };
module.exports = { createBusiness, getBusinesses, getBusinessById };
