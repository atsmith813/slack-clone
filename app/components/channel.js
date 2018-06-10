import React from 'react';

const Channel = ({ channel, activeChannel, onChannelSelect }) => {
  const isActiveChannel = channel == activeChannel ? "active" : null;

  return (
    <li
      onClick={ () => onChannelSelect(channel) }
      className={ "channel list-group-item " + isActiveChannel } >
      { '# ' + channel }
    </li>
  );
}

export default Channel;

