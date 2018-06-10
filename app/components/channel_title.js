import React, { Component } from 'react';

const ChannelTitle = () => {
  return (
    <div className="channel-title">
      <h1 className="d-inline">Channels</h1>
      <button
        type="button"
        className="create-channel-btn btn btn-success d-inline float-right" >
        Create
      </button>
    </div>
  );
}

export default ChannelTitle;

