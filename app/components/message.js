import React, { Component } from 'react';

const Message = (props) => {
  const message = props.message;
  const activeUser = props.activeUser;
  const screenName = message.screenName;
  const messageContent = message.content;
  const timestamp = message.timestamp;
  const screenNameColor = screenName === activeUser ? 'own-message' : '';

  return (
    <li class_name="list-group-item">
      <div className={ "screen_name d-inline " + screenNameColor } >
        { screenName }
      </div>
      <div className={ "timestamp  d-inline" } >
        { timestamp }
      </div>
      <div className="message_content">
        { messageContent }
      </div>
    </li>
  );
}

export default Message;

