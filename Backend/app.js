const dotenv = require('dotenv'); // Load environment variables from .env file
dotenv.config(); // Initialize dotenv to read .env file


const cors = require('cors'); // Import CORS middleware for handling cross-origin requests

//app.use(cors()); // Use CORS middleware in the Express app

const express = require('express'); // ← spelling fixed

const app = express(); // Create an Express application

// Define a route for the root URL "/"
app.get('/', (req, res) => {
    res.send('Hello World!'); // Respond with text
});

module.exports = app; // Export the app to use in another file (like for testing or starting the server)
