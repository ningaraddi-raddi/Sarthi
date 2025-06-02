const http=require('http');
const app = require('./app'); // Import the Express app from app.js

const server=http.createServer(app); // Create an HTTP server using the Express app
const PORT = process.env.PORT || 3000; // Set the port from environment variables or default to 3000


server.listen(PORT, () => { // Start the server and listen on the specified port
    console.log(`Server is running on port ${PORT}`); // Log a message when the server starts
}); // End of server.listen
// This code sets up a basic HTTP server using Express and listens on a specified port. 