import React, { Component } from 'react';
import MessageDate from './message_date';

const MessageFeed = (props) => {
  const messagesByDate = props.messages;
  const messageDates = Object.keys(messagesByDate).map((date, index) => {
    return (
      <MessageDate
        date={ date }
        messages={ messagesByDate[date] }
        activeUser={ props.activeUser }
        key={ 'date_' + index }/>
    );
  });

  return (
    <div className ="message-feed scrollable w-100">
      { messageDates }
    </div>
  );
}

export default MessageFeed;

