import React, { Component } from 'react';
import ChooseScreenName from './choose_screen_name';

const ScreenNameTitle = (props) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    props.onScreenNameChange();
  }

  return (
    <div className="screen-name-title d-inline float-right">
      <h1 className="own-message screen-name d-inline">
        <i className="user-icon fa fa-user-o d-inline"></i>
      </h1>
      <h1 className="own-message d-inline">{ props.activeUser }</h1>
      <button
        type="button"
        className="change-screen-name-btn btn btn-success d-inline"
        onClick={ e => handleOnClick(e) } >
        Change Screen Name
      </button>
    </div>
  );
}

export default ScreenNameTitle;

