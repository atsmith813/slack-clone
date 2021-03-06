import React, { Component } from 'react';
import axios from 'axios';
import ChannelList from './channel_list';
import ChatBox from './chat_box';
import MessageFeed from './message_feed';
import ChannelTitle from './channel_title';
import ScreenNameTitle from './screen_name_title';

class Chats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channels: [],
      messages: [],
      new_channel: false
    };

    this.onMessageSend = this.onMessageSend.bind(this);
    this.setWebSocket = this.setWebSocket.bind(this);
  }

  componentDidMount() {
    axios.get('/channels')
      .then((response) => {
        const channels = response.data;
        const activeChannel = this.props.activeChannel || channels[0]
        this.setState({
          channels: channels,
          activeChannel: activeChannel
        });
        this.getMessages(activeChannel);
        this.props.setActiveChannel(activeChannel);
      })
      .catch((error) => {
        console.log(error);
      });
    this.setWebSocket();
  }

  setWebSocket() {
    const webSocketProtocol = window.location.host === '127.0.0.1:3000' ? 'ws://' : 'wss://'
    this.connection = new WebSocket(webSocketProtocol + window.location.host + '/channel');
    this.connection.onmessage = (message) => {
      const newMessageData = JSON.parse(message.data);
      const newMessageChannel = newMessageData.channel;
      if (this.props.activeChannel === newMessageChannel) {
        this.setState({
          activeChannel: newMessageChannel
        });
        this.getMessages(newMessageChannel);
      }
    }
  }

  onMessageSend(message_content) {
    this.connection.send(JSON.stringify({
      event: 'new_message',
      content: message_content,
      user: this.props.activeUser,
      channel: this.props.activeChannel
    }));
  }

  onChannelSelect(activeChannel) {
    this.props.setActiveChannel(activeChannel);
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
    return (
      <div className="chat row h-100 w-100">
        <div className="col-md-3 h-100 channel-column">
          <ChannelTitle renderNewChannel={ this.props.renderNewChannel() }/>
          <ChannelList
            onChannelSelect={ activeChannel => this.onChannelSelect(activeChannel) }
            channels={ this.state.channels }
            activeChannel={ this.props.activeChannel } />
        </div>
        <div className="col-md-9 h-100">
          <h1 className="active-channel-title d-inline">{ '# ' + this.props.activeChannel }</h1>
          <ScreenNameTitle
            onScreenNameChange={ this.props.onScreenNameChange }
            activeUser={ this.props.activeUser } />
          <MessageFeed
            messages={ this.state.messages }
            activeUser={ this.props.activeUser } />
          <ChatBox
            onMessageSend={ e => this.onMessageSend(e) }
            activeUser={ this.props.activeUser } />
        </div>
      </div>
    );
  }
}

export default Chats;

