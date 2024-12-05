const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const { handleMessage } = require('./controllers/messageController');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// Serve frontend static files
const frontendPath = path.join(__dirname, '../frontend');
app.use(express.static(frontendPath));

// Fallback route for single-page apps
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Track online users
const onlineUsers = new Map(); // Online users map

module.exports = { onlineUsers };

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Add user to onlineUsers with default username
  onlineUsers.set(socket.id, { username: `User-${socket.id.substring(0, 4)}` });

  // Notify all clients of updated online users
  io.emit('online-users', Array.from(onlineUsers.values()));

  // Handle incoming messages
  socket.on('message', (message) => {
    handleMessage(socket, message, onlineUsers); // Pass onlineUsers to the handler
  });

  // Handle username setup
  socket.on('set-username', (username) => {
    const user = onlineUsers.get(socket.id);
    if (user) {
      user.username = username;
      io.emit('online-users', Array.from(onlineUsers.values())); // Update the online users list
    }
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
    onlineUsers.delete(socket.id);
    io.emit('online-users', Array.from(onlineUsers.values())); // Update the online users list
  });
});

// Start Server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
