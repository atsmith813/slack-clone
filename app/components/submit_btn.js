import React, { Component } from 'react';

const SubmitBtn = (props) => {
  const btn_text = props.btn_text || 'Submit';
  return (
    <button type="submit" className="btn btn-primary btn-lg w-100" role="button">
      { btn_text }
    </button>
  );
}

export default SubmitBtn;

