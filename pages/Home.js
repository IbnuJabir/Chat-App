// Home.js

import React, { useState } from 'react';
import ChatList from './ChatList';

const Home = () => {
  const [showChat, setShowChat] = useState(false);

  const handleGetStartedClick = () => {
    setShowChat(true);
  };

  return (
    <>
      {!showChat ? (
    <div className="home-container">
        <div className="hero">
          <h1 className="heading">Chat with Friends</h1>
          <p className="subheading">Connect and share moments with your friends.</p>
          <button className="getStartedButton" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
    </div>
      ) : (
        <ChatList />
      )}
      </>
  );
};

export default Home;
