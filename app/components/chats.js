import React, { Component } from 'react';
import ChannelList from './channel_list';

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
    const channels = ['channel_1', 'channel_2', 'channel_3'];
    this.setState({
      channels: channels,
      activeChannel: channels[0]
    });
  }

  render() {
    return(
      <div>
        <ChannelList
          onChannelSelect={ activeChannel => this.setState({ activeChannel }) }
          channels={ this.state.channels }
          activeChannel={ this.state.activeChannel } />
      </div>
    );
  }
}

export default Chats;

