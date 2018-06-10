import React, { Component } from 'react';
import NewChannel from './new_channel';

const ChannelTitle = (props) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    props.renderNewChannel();
  }

  return (
    <div className="channel-title">
      <h1 className="d-inline">Channels</h1>
      <button
        type="button"
        className="create-channel-btn btn btn-success d-inline float-right"
        onClick={ e => handleOnClick(e) } >
        Create
      </button>
    </div>
  );
}

export default ChannelTitle;

