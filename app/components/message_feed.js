import React, { Component } from 'react';
import Message from './message';

const MessageFeed = (props) => {
  const messages_array = Array.from(props.messages);
  const formatted_messages = messages_array.map((message, index) => {
    return (
      <Message
        message={ message }
        key={ 'message_' + index }/>
    );
  });

  return (
    <ul className ="list-group message-feed scrollable">
      { formatted_messages }
    </ul>
  );
}

export default MessageFeed;

