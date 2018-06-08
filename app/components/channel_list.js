import React, { Component } from 'react';
import ChannelListItem from './channel_list_item';

const ChannelList = (props) => {
  const channelItems = props.channels.map((channel) => {
    return (
      <ChannelListItem
        onChannelSelect={ props.onChannelSelect }
        key={ channel }
        channel={ channel }
        activeChannel= { props.activeChannel } />
    );
  });

  return (
    <ul className="list-group scrollable h-100">
      { channelItems }
    </ul>
  );
}

export default ChannelList;

