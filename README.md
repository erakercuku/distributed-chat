# Distributed Chat

Distributed Chat is a minimal viable product (MVP) for a real-time chat application, developed as part of a distributed development project. It allows users to send and receive messages in real time while showcasing best practices in remote collaboration, version control, and software documentation.

---

## Features

- **Real-time Messaging**: Enables seamless communication between users.
- **Modular Design**: Clear separation of frontend and backend components to facilitate future enhancements like group chats and user status updates.
- **Scalable Architecture**: Designed to grow with additional features.

---

## Project Structure

The repository is organized as follows:


---

## Setup Instructions

Follow the steps below to run the application locally.

### Prerequisites
- **Node.js**: Required to run the backend server. Download and install it from [Node.js official website](https://nodejs.org/).
- **Modern Web Browser**: Use any modern browser like Chrome, Firefox, or Edge to run the frontend.

### Steps

1. **Clone the Repository**
   - Use GitHub Desktop or run the following command in your terminal:
     ```bash
     git clone https://github.com/your-username/distributed-chat.git
     ```

2. **Backend Setup**
   - Navigate to the `backend/` folder in the cloned repository.
   - Install backend dependencies:
     ```bash
     npm install
     ```
   - Start the backend server:
     ```bash
     node server.js
     ```

3. **Frontend Setup**
   - Open the `frontend/index.html` file in your browser.
   - Start chatting!

---

## User Guide

Once the application is set up and running, here's how to use it:

1. **Access the Chat Application**
   - Open the `frontend/index.html` file in your web browser. This will display the chat interface.

2. **Start Chatting**
   - Enter a message in the input field provided at the bottom of the chat interface.
   - Click the "Send" button or press "Enter" to send your message.

3. **Real-time Messaging**
   - Any other user connected to the backend server will immediately see your message.
   - You will also see messages sent by other users in real time.

4. **Refresh the Page**
   - Refreshing the browser page will reset the chat interface, but you can reconnect and continue chatting.

---

## Tools and Technologies

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express, WebSocket
- **Version Control**: Git, GitHub
- **AI Assistance**: ChatGPT, GitHub Copilot
- **Communication Tools**: Slack, Discord

---

## Contributors

- **Era Kercuku**: Documentation and Integration
- **Stuti Yogeshkumar Mistry**: Frontend Development
- **Haziel Abner David Barrientos**: Backend Development

---

## License

This project is for educational purposes only and is not licensed for production use.

---

## Future Enhancements

Here are some potential improvements planned for the application:

1. **Group Chat Functionality**
   - Allow multiple users to communicate in a shared group.

2. **User Authentication**
   - Enable secure login and personalized user experience.

3. **User Status Display**
   - Show online/offline status for users in real time.
