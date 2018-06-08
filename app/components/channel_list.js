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
    <ul className="col-md-4 list-group">
      { channelItems }
    </ul>
  );
}

export default ChannelList;

