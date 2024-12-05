# Distributed Chat  

Distributed Chat is a minimal viable product (MVP) for a real-time chat application, developed as part of a distributed development project. It allows users to send and receive messages in real time while showcasing best practices in remote collaboration, version control, and software documentation.  

---  

## Features  

- **Real-time Messaging**: Enables seamless communication between users.  
- **Modular Design**: Clear separation of frontend and backend components to facilitate future enhancements like group chats and user status updates.  
- **Scalable Architecture**: Designed to grow with additional features.  

---  

## Setup Instructions  

Follow the steps below to set up and deploy the application:  

### Prerequisites  

1. **MongoDB Tools**:  
   - Install **MongoDB Shell** and **MongoDB Compass**.  
   - Set up a **MongoDB Atlas** admin user account and create a **Cluster** with access from everywhere.  
   - Link the cluster to **MongoDB Compass**.  

2. **Render Account**:  
   - Create an account on [Render](https://render.com).  

### Deployment Steps  

1. **Prepare the Repository**:  
   - Fork the project repository from GitHub.  

2. **Create a New Web Service on Render**:  
   - Link your GitHub account to Render and select the forked repository.  

3. **Configure the Web Service**:  
   - Set a name for your web service.  
   - Choose a region close to the target audience.  
   - Select the branch of the repository you want to deploy.  
   - Set the root directory to the `backend` folder.  
   - Specify the following commands:  
     - **Build Command**: `npm install`  
     - **Start Command**: `node app.js`  

4. **Add Environment Variables**:  
   - Create an environment variable.  
   - Use any **key** of your choice.  
   - Set the **value** as your MongoDB Atlas connection string, including your password.  

5. **Deploy the Application**:  
   - Finish creating the web service.  
   - Monitor deployment logs to ensure successful setup.  

6. **Access the Application**:  
   - Once deployment is complete, go to the generated URL (e.g., [https://distributed-chat.onrender.com](https://distributed-chat.onrender.com)).  
   - Share this link with anyone who wishes to join the chat!  

---  

## User Guide  

1. **Access the Application**:  
   - Open the deployed application link (e.g., [https://distributed-chat.onrender.com](https://distributed-chat.onrender.com)) in your browser.  

2. **Start Chatting**:  
   - Enter your message in the input field.  
   - Click the "Send" button or press "Enter" to send the message.  

3. **Real-Time Communication**:  
   - Messages from other users will appear instantly.  

4. **Invite Others**:  
   - Share the application link with anyone who wants to join the conversation.  

---  

## Tools and Technologies  

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js, Express, WebSocket  
- **Database**: MongoDB Atlas  
- **Hosting**: Render  
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
