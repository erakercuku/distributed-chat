const Message = require('../models/message');

const handleMessage = async (socket, message, onlineUsers) => {
  const user = onlineUsers.get(socket.id); // Access onlineUsers from the argument
  const sender = user ? user.username : 'Anonymous';

  console.log(`Message from ${sender}: ${message}`);

  // Save to database
  const savedMessage = new Message({ content: message, sender });
  await savedMessage.save();

  // Broadcast the message to all clients (including the sender)
  socket.broadcast.emit('message', { content: message, sender });
};

module.exports = { handleMessage };
