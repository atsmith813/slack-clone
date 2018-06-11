import React, { Component } from 'react';

class ChatBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message_length: 0,
      message_content: ''
    };

    this.onEnterPress = this.onEnterPress.bind(this);
  }

  onInputChange(e) {
    this.setState({
      message_length: e.target.value.length,
      message_content: e.target.value
    });
  }

  onEnterPress(e) {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      const message_content = e.target.value;
      if (message_content.length) {
        this.setState({
          message_content: '',
          message_length: 0
        });
        this.props.onMessageSend(e.target.value);
      }
    }
  }

  render() {
    return (
      <div className="w-100 chat-box">
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder={ "Hey, " + this.props.activeUser + "! Type your message here and press 'Enter'" }
            value={ this.state.message_content }
            onKeyDown={ this.onEnterPress }
            onChange={ e => this.onInputChange(e) } />
          <small
            id="character-counter"
            className="form-text text-muted" >
            { this.state.message_length + " / 255 characters" }
          </small>
        </div>
      </div>
    );
  }
}

export default ChatBox;

