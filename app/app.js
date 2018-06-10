import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Chats from './components/chats';
import ChooseScreenName from './components/choose_screen_name';
import NewChannel from './components/new_channel';

class App extends Component {

  constructor(props) {
    super(props);
    //this.state = { activeUser: sessionStorage.getItem('screenName') };
    this.state = {
      activeUser: 'test_user',
      newChannel: false,
      channelAdded: false,
      activeChannel: ''
    };
    this.renderNewChannel = this.renderNewChannel.bind(this);
    this.addNewChannel = this.addNewChannel.bind(this);
  }

  setDefaultChannel(activeChannel) {
    this.setState({ activeChannel });
  }

  onScreenNameSelect(screenName) {
    this.setState({ activeUser: screenName });
  }

  renderNewChannel() {
    this.setState({ newChannel: true });
  }

  addNewChannel(newChannel) {
    this.setState({
      activeChannel: newChannel,
      newChannel: false
    });
  }

  render() {
    if (this.state.newChannel) {
      return (
        <NewChannel
          activeUser={ this.state.activeUser }
          addNewChannel={ newChannel => this.addNewChannel(newChannel) } />
      )
    } else if (this.state.activeUser) {
      return (
        <Chats
          setDefaultChannel={ activeChannel => this.setDefaultChannel(activeChannel) }
          activeChannel={ this.state.activeChannel }
          activeUser={ this.state.activeUser }
          renderNewChannel={ () => this.renderNewChannel } />
      )
    } else {
      return (
        <ChooseScreenName onScreenNameSelect={ screenName => this.onScreenNameSelect(screenName) } />
      )
    }
  }

}

ReactDom.render(<App />, document.getElementById('app'));

