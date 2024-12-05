const socket = io(); // Connect to the backend

const messagesDiv = document.getElementById('messages');
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');
const usernameInput = document.getElementById('username-input');
const usernameSubmit = document.getElementById('username-submit');
const usersDiv = document.getElementById('online-users');

// Append a message to the messages div
function appendMessage(message, isMine) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  messageElement.style.textAlign = isMine ? 'right' : 'left';
  messagesDiv.appendChild(messageElement);
  messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll
}

// Handle new messages from the backend
socket.on('message', (data) => {
  const message = data.content || '[No content]';
  const sender = data.sender || 'Anonymous';
  appendMessage(`${sender}: ${message}`, false);
});

// Update the online users list
socket.on('online-users', (users) => {
  usersDiv.innerHTML = '<h3>Online Users</h3>';
  users.forEach((user) => {
    const userElement = document.createElement('div');
    userElement.textContent = user.username;
    usersDiv.appendChild(userElement);
  });
});

// Handle username submission
usernameSubmit.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  if (username) {
    socket.emit('set-username', username); // Send the username to the backend
    usernameInput.disabled = true;
    usernameSubmit.disabled = true;
  }
});

// Send a message to the backend
chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = messageInput.value.trim();
  if (message) {
    appendMessage(`You: ${message}`, true);
    socket.emit('message', message); // Emit the message to the server
    messageInput.value = '';
  }
});
