import React from "react";

import "./App.css";
import IndividualMessage from "./IndividualMessage.js";
import {messages} from './messages';
import MessageList from './MessageList.js'
import ToSendBox from './ToSendBox';
import Forms from './FormsAndInputs'

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
        <MessageList messages = {messages}/>

          
         

          
        </div>
        <div className="bottom-bar">
          <ToSendBox/>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
