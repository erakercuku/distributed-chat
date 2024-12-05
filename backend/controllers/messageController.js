const Message = require('../models/message');

const handleMessage = async (socket, message) => {
  console.log(`Message from ${socket.id}: ${message}`);

  // Save to database
  const savedMessage = new Message({ content: message, sender: socket.id });
  await savedMessage.save();

  // Broadcast to other clients
  socket.broadcast.emit('message', { text: message, sender: socket.id });
};

module.exports = { handleMessage };
