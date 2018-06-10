import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Chats from './components/chats';
import ChooseScreenName from './components/choose_screen_name';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { activeUser: sessionStorage.getItem('screenName') };
  }

  onScreenNameSelect(screenName) {
    this.setState({ activeUser: screenName });
  }

  render() {
    if (this.state.activeUser) {
      return(
        <Chats activeUser={ this.state.activeUser }/>
      )
    } else {
      return (
        <ChooseScreenName onScreenNameSelect={ screenName => this.onScreenNameSelect(screenName) } />
      )
    }
  }

}

ReactDom.render(<App />, document.getElementById('app'));

