import React, { Component } from 'react';
import axios from 'axios';
import SubmitBtn from './submit_btn';
import PostHeaders from './post_headers';

class NewChannel extends Component {
  constructor(props) {
    super(props);
    this.state = { newChannel: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleScreenNameChange(e) {
    this.setState({ screenName: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('/home', {screenName: this.state.screenName}, PostHeaders)
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      });
    this.props.onScreenNameSelect(this.state.screenName);
  }

  render() {
    return (
      <div className="container w-100 h-100">
        <div className="row align-items-center h-100">
          <div className="text-center col-12 col-md-4 offset-md-4">
            <form onSubmit={ e => this.handleSubmit(e) }>
              <div className="form-group">
                <input
                  type="text"
                  className="text-center form-control form-control-lg"
                  id="selectScreenName"
                  placeholder="Enter your screen name here"
                  value={ this.state.screenName }
                  onChange={ e => this.handleScreenNameChange(e) } />
              </div>
              <SubmitBtn btn_text="Connect" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ChooseScreenName;

