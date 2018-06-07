import React, { Component } from 'react';

const SubmitBtn = (props) => {
  return (
    <button className="btn btn-success">
      { props.submit_text }
    </button>
  );
}

export default SubmitBtn;

