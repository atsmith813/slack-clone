import React from 'react';

const ChannelListItem = ({ channel, activeChannel, onChannelSelect }) => {
  const isActiveChannel = channel == activeChannel ? "active" : null;
  return (
    <li
      onClick={ () => onChannelSelect(channel) }
      className={ "list-group-item " + isActiveChannel } >

      { '#' + channel }
    </li>
  );
}

export default ChannelListItem;

