import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Chats from './components/chats';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Chats />
    );
  }

}

ReactDom.render(
  <App />,
  document.getElementById('app')
);

