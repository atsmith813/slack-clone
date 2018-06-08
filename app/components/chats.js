import React, { Component } from 'react';
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
    // API call to get list of channels from server and then update the state
    // a loop to build this test array was just not working ¯\_(ツ)_/¯
    const channels = [
      'channel_1',
      'channel_2',
      'channel_3',
      'channel_4',
      'channel_5',
      'channel_6',
      'channel_7',
      'channel_8',
      'channel_9',
      'channel_10',
      'channel_11',
      'channel_12',
      'channel_13',
      'channel_14',
      'channel_15',
      'channel_16',
      'channel_17',
      'channel_18',
      'channel_19',
      'channel_20',
      'channel_21',
      'channel_22',
      'channel_23',
      'channel_24',
      'channel_25',
      'channel_26',
      'channel_27',
      'channel_28',
      'channel_29',
      'channel_30',
      'channel_31',
      'channel_32',
      'channel_33'
    ];
    this.setState({
      channels: channels,
      activeChannel: channels[0]
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

