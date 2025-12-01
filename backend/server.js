require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const authRoutes = require('./routes/auth');

const app = express();

const uri = process.env.MONGO_URI;
if (!uri) throw new Error("MONGO_URI is missing");


app.use(cors());
app.use(express.json());

// in backend/server.js
app.use("/auth", require("./routes/auth"));
app.use("/mood", require("./routes/mood"));
app.use('/auth', authRoutes);

// MongoDB connection
mongoose.connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Example route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);});


