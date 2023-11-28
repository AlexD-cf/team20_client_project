// Server-side code (app.js)
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Database connection
mongoose.connect('mongodb://localhost:27017/QuizDatabase', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// Define API endpoint
app.get('/api/data', (req, res) => {
  // Perform database operations here
  res.json({ message: 'Data from the database' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});