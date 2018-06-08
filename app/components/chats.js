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
      activeChannel: ''
    };
  }

  componentDidMount() {
    axios.get('/channel')
      .then((response) => {
        console.log(response);
        const channels = response.data;
        this.setState({
          channels: channels,
          activeChannel: channels[0]
        });
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
            onChannelSelect={ activeChannel => this.setState({ activeChannel }) }
            channels={ this.state.channels }
            activeChannel={ this.state.activeChannel } />
        </div>
        <div className="col-md-9 w-100 h-100">
          <MessageFeed />
          <ChatBox />
        </div>
      </div>
    );
  }
}

export default Chats;

