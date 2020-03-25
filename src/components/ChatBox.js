import React from "react";

import "./App.css";
import IndividualMessage from "./IndividualMessage.js";
import { messages } from "./messages";
import MessageList from "./MessageList.js";
import ToSendBox from "./ToSendBox";
import Forms from "./FormsAndInputs";
import Scroll from "./Scroll.js";

const MyMsg = () => <div className="mymsg">from me</div>;

const TheirMsg = () => <div className="theirmsg">from them</div>;

const ChatBox = () => {
  return (
    <div className="flex-container">
      <div className="chatbox-container">
        <div className="chatbox-title">
          <p className="title">Agent</p>
        </div>
        <Scroll>
          <div className="chatbox-content">
            <MessageList messages={messages} />
          </div>
        </Scroll>
        <Forms />
      </div>
    </div>
  );
};

export default ChatBox;
