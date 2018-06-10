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

  handleChannelNameChange(e) {
    this.setState({ newChannel: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('/channels', { newChannel: this.state.newChannel}, PostHeaders)
      .then(function (response) {
        this.props.addNewChannel(this.state.newChannel);
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
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
                  placeholder="Enter new channel name here"
                  value={ this.state.newChannel }
                  onChange={ e => this.handleChannelNameChange(e) } />
              </div>
              <SubmitBtn btn_text="Create Channel" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewChannel;

