import React, { Component } from 'react';
import Message from './message';

const MessageDate = (props) => {
  const date = props.date;
  const messages = props.messages;
  const formatted_messages = messages.map((message, index) => {
    return (
      <Message
        activeUser={ props.activeUser }
        message={ message }
        key={ 'message_' + index }/>
    );
  });

  return (
    <div>
      <div className="message_date">
        { date }
      </div>
      <ul className="list-group">
        { formatted_messages }
      </ul>
    </div>
  );
}

export default MessageDate;

