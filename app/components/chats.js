import React, { Component } from 'react';
import axios from 'axios';
import ChannelList from './channel_list';
import ChatBox from './chat_box';
import MessageFeed from './message_feed';
import ChannelTitle from './channel_title';

class Chats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channels: [],
      activeChannel: '',
      messages: []
    };
    this.onMessageSend = this.onMessageSend.bind(this);
  }

  componentDidMount() {
    axios.get('/channels')
      .then((response) => {
        const channels = response.data;
        this.setState({
          channels: channels,
          activeChannel: channels[0]
        });
        this.getMessages(channels[0]);
      })
      .catch((error) => {
        //console.log(error);
      });

    this.connection = new WebSocket('ws://localhost:3000/channel');
    this.connection.onmessage = (message) => {
      const newMessageData = JSON.parse(message.data);
      const newMessageChannel = newMessageData.channel;
      if (this.state.activeChannel === newMessageChannel) {
        const messages = Array.from(this.state.messages);
        messages.unshift(newMessageData.new_message);
        this.setState({
          messages: messages,
          activeChannel: newMessageChannel
        });
      }
    }
  }

  onMessageSend(message_content) {
    this.connection.send(JSON.stringify({
      event: 'new_message',
      content: message_content,
      user: this.props.activeUser,
      channel: this.state.activeChannel
    }));
  }

  onChannelSelect(activeChannel) {
    this.setState({ activeChannel });
    this.getMessages(activeChannel);
  }

  getMessages(activeChannel) {
    axios.get('/messages/' + activeChannel)
      .then((response) => {
        this.setState({ messages: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return(
      <div className="chat row h-100 w-100">
        <div className="col-md-3 h-100 channel-column">
          <ChannelTitle />
          <ChannelList
            onChannelSelect={ activeChannel => this.onChannelSelect(activeChannel) }
            channels={ this.state.channels }
            activeChannel={ this.state.activeChannel } />
        </div>
        <div className="col-md-9 h-100">
          <div className="w-100 h-100 scrollable">
            <h1>{ this.state.activeChannel }</h1>
            <MessageFeed messages={ this.state.messages } />
          </div>
          <ChatBox
            onMessageSend={ e => this.onMessageSend(e) } />
        </div>
      </div>
    );
  }
}

export default Chats;

