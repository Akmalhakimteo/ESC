import React from "react";

import "./App.css";

const MyMsg = () => <div className="mymsg">from me</div>;

const TheirMsg = () => <div className="theirmsg">from them</div>;

const ChatBox = () => {
  return (
    <div className="flex-container">
      <div className="chatbox-container">
        <div className="chatbox-title">
          <p className="title">Agent</p>
        </div>
        <div className="chatbox-content">
          <div className="msg-container-their">
            <TheirMsg></TheirMsg>
          </div>

          <div className="msg-container-my">
            <MyMsg></MyMsg>
          </div>
          <div className="msg-container-their">
            <TheirMsg></TheirMsg>
          </div>

          <div className="msg-container-my">
            <MyMsg></MyMsg>
          </div>
        </div>
        <div className="bottom-bar">
          <input
            type="
        "
          />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
