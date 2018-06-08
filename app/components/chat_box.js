import React, { Component } from 'react';

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = { message_length: 0 };
  }

  onInputChange(e) {
    this.setState({ message_length: e.target.value.length });
  }

  onEnterPress(e) {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      // trigger message send via websocket
      // clear message box if successful
      // check that state.message_length changed to 0 after success
      console.log("ENTER PRESSED!");
    }
  }


  render() {
    return (
      <div className="w-100 chat-box">
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Type your message here and press 'Enter'"
            value={ this.state.message }
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

