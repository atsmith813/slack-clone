import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ChooseScreenName from './components/choose_screen_name';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ChooseScreenName />
    );
  }

}

ReactDom.render(
  <App />,
  document.getElementById('app')
);

