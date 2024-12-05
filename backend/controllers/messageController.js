const Message = require('../models/message');

const handleMessage = async (socket, message) => {
  const user = onlineUsers.get(socket.id);
  const sender = user ? user.username : 'Anonymous';

  console.log(`Message from ${sender}: ${message}`);

  // Save to database
  const savedMessage = new Message({ content: message, sender });
  await savedMessage.save();

  // Broadcast to other clients
  socket.broadcast.emit('message', { content: message, sender });
};

module.exports = { handleMessage };
