import React, { Component } from 'react';

const Message = ({ message }) => {
  const screen_name = message[0];
  const message_content = message[1];
  return (
    <li class_name="list-group-item">
      <div className="screen_name d-inline">
        { screen_name + ':' }
      </div>
      <div className="message_content d-inline">
        { message_content }
      </div>
    </li>
  );
}

export default Message;

