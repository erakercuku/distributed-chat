const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const { handleMessage } = require('./controllers/messageController');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// Database Connection
mongoose.connect('mongodb://localhost:27017/chat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// WebSocket Handling
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('message', (message) => {
    handleMessage(socket, message);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

// Start Server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
