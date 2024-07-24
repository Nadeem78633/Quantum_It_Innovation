// server.js
require("dotenv").config();
const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth.js");
const connectDB = require("./config/db.js");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Mongo Db connect
connectDB();

app.use("/api", authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
