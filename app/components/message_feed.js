import React, { Component } from 'react';

class MessageFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new_message: false,
      messages: []
    };
  }

  componentDidMount() {
    this.connection = new WebSocket('ws://localhost:3000/channel');

    this.connection.onopen = (message) => {
      console.log('connected to channel');
      this.connection.send(JSON.stringify({ event: 'ping', some: 'data' }));
    }

    this.connection.onmessage = (message) => {
      console.log('message', JSON.parse(message.data));
    }

    // this is an "echo" websocket service for testing pusposes
    //this.connection = new WebSocket('wss://echo.websocket.org');

    // listen to onmessage event
    //this.connection.onmessage = evt => {
      //// add the new message to state
      //this.setState({
        //messages : this.state.messages.concat([ evt.data ])
      //})
    //}

    // for testing: sending a message to the echo service every 2 seconds,
    // the service sends it right back
    //setInterval( _ =>{
        //this.connection.send( Math.random() )
    //}, 2000 )
  }

  render() {

    return (
      <div className ="w-100 message-feed scrollable">

      </div>

    );
  }

}

export default MessageFeed;

