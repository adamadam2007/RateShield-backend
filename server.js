const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => res.json({ message: "RateShield API is running", status: "OK" }));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/businesses", require("./routes/businessRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/prices", require("./routes/priceRoutes"));
app.use("/api/alerts", require("./routes/alertRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`RateShield backend running on port ${PORT}`));
