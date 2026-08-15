const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, role, business } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({ fullName, email, password: hashedPassword, role, business });
    res.status(201).json({ _id: user._id, fullName: user.fullName, email: user.email, role: user.role, token: generateToken(user._id) });
  } catch (error) { res.status(500).json({ message: error.message }); }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      return res.json({ _id: user._id, fullName: user.fullName, email: user.email, role: user.role, token: generateToken(user._id) });
    }
    return res.status(401).json({ message: "Invalid email or password" });
  } catch (error) { res.status(500).json({ message: error.message }); }
};
module.exports = { registerUser, loginUser };
