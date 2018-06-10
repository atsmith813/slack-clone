import React, { Component } from 'react';
import Channel from './channel';

const ChannelList = (props) => {
  const channels = props.channels.map((channel) => {
    return (
      <Channel
        onChannelSelect={ props.onChannelSelect }
        key={ channel }
        channel={ channel }
        activeChannel= { props.activeChannel } />
    );
  });

  return (
    <ul className="channel-list list-group scrollable h-100">
      { channels }
    </ul>
  );
}

export default ChannelList;

