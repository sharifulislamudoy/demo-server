const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGO_URI || "YOUR_MONGODB_URI_HERE";

mongoose.connect(uri, {
  dbName: "testDB"
})
.then(() => {
  console.log("MongoDB connected");
})
.catch((err) => {
  console.error("MongoDB connection error:", err.message);
});

// Routes
app.get('/', (req, res) => {
  res.send('Server is running with MongoDB');
});

// Start server
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
