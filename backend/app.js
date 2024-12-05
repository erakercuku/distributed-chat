const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // Import path for resolving directories
require('dotenv').config();

const { handleMessage } = require('./controllers/messageController');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(cors({ origin: '*' })); // Allow CORS for all origins
app.use(express.json()); // Parse JSON payloads

// Serve frontend static files
const frontendPath = path.join(__dirname, '../frontend'); // Adjust the path to the frontend folder
app.use(express.static(frontendPath)); // Serve static files from the frontend folder

// Fallback route for single-page apps
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/DD_Project_chat') // Connect to MongoDB
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// WebSocket Handling
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Handle incoming messages
  socket.on('message', (message) => {
    handleMessage(socket, message);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

// Start Server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
