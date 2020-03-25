import React from "react";
import IndividualMessage from "./IndividualMessage.js";
import {messages} from './messages';

const MessageList = ({messages}) => {
  const messageComponent = messages.map((user,i)=>{
      return <IndividualMessage
        name={messages[i].name}
        message={messages[i].message}
      />
  })

  return (
    <div>
      {messageComponent}
    </div>
  );
}

export default MessageList;
