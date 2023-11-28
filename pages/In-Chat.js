import profile_pic from '../Images/logo.jpg';
import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';

export default function InChat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);
let i = 0;
  const handleMessageSubmit = (e) => {
    e.preventDefault();

    if (newMessage.trim() !== '') {
      const message = {
        id: Date.now(),
        text: newMessage,
        time: formatTime(new Date()),
      };

      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage('');
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Scroll to the last message when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to scroll to the last message
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  };

  useEffect(() => {
    const messagesContainer = document.getElementById('messages-container');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, [messages]);

  return (
    <div className="InChatNav">
      <div className="chatNav">
        <Link to="/ChatList" className="chatNavIcon">
          <i className="fa fa-solid fa-arrow-left"></i>
        </Link>
        <img src={profile_pic} className="profile-pic" alt="profile" />
        <h3 className="person">Ibnu Jabir</h3>
      </div>
      <section className="MessageBody">
        <form onSubmit={handleMessageSubmit}>
          <div className="SendMsg">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="chat-text"
            />
            <button type="submit" className="send-chat">
              <i className="fa fa-sharp fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </form>
        <div id="messages-container" className="message-body">
          {messages.map((message) => (
            <div key={message.id} className={!((++i % 2) === 0) ? 'message' : 'other-message'}>
              {message.text}
              <span className="message-time">{message.time}</span>
            </div>
          ))}
          <div ref={messagesEndRef} /> {/* Empty div as a reference for scrolling */}
        </div>
      </section>
    </div>
  );
}



