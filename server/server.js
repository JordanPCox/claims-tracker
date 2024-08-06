// server.js
const express = require('express');
const connectDB = require('./db');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Define routes - create routes for adjusters and claims here
app.use('/api/adjusters', require('./routes/adjusters'));
app.use('/api/claims', require('./routes/claims'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
