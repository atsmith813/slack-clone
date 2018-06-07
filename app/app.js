import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SubmitBtn from './components/submit_btn';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>React is working!</h1>
        </div>
        <SubmitBtn submit_text='TESTING!' />
      </div>
    );
  }

}

ReactDom.render(
  <App />,
  document.getElementById('app')
);
