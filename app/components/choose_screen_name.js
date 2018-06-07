import React, { Component } from 'react';
import SubmitBtn from './submit_btn';

const ChooseScreenName = () => {

  const submitScreenName = () => {

  }

  return (
    <div className="container w-100 h-100">
      <div className="row align-items-center h-100">
        <div className="text-center col-12 col-md-4 offset-md-4">
          <form>
            <div className="form-group">
              <input type="text" className="text-center form-control form-control-lg" id="selectScreenName" placeholder="Enter your screen name here"></input>
            </div>
            <SubmitBtn btn_text="Connect" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChooseScreenName;

