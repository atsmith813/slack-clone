import React, { Component } from 'react';

const Message = (props) => {
  const message = props.message;
  const activeUser = props.activeUser;
  const screen_name = message[0];
  const message_content = message[1];
  const screenNameColor = screen_name === activeUser ? 'own-message' : '';

  return (
    <li class_name="list-group-item">
      <div className={ "screen_name d-inline " + screenNameColor } >
        { screen_name + ':' }
      </div>
      <div className="message_content d-inline">
        { message_content }
      </div>
    </li>
  );
}

export default Message;

