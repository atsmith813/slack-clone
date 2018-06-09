import React, { Component } from 'react';
import axios from 'axios';
import ChannelList from './channel_list';
import ChatBox from './chat_box';
import MessageFeed from './message_feed';

class Chats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channels: [],
      activeUser: 'test_user',
      //activeUser: sessionStorage.getItem('screenName', data),
      activeChannel: '',
      messages: []
    };
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
    this.connection.onopen = (message) => {
      //console.log('connected to channel');
      this.connection.send(JSON.stringify({ event: 'ping', some: 'data' }));
    }
    this.connection.onmessage = (message) => {
      //console.log('message', JSON.parse(message.data));
    }
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
        <div className="col-md-3 h-100 scrollable">
          <ChannelList
            onChannelSelect={ activeChannel => this.onChannelSelect(activeChannel) }
            channels={ this.state.channels }
            activeChannel={ this.state.activeChannel } />
        </div>
        <div className="col-md-9 h-100">
          <div className="w-100 h-100 scrollable">
            <MessageFeed messages={ this.state.messages } />
          </div>
          <ChatBox />
        </div>
      </div>
    );
  }
}

export default Chats;

