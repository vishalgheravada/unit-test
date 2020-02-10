import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <div dataTest="AppComponent">
        <p>Test App</p>
        <p>Counter: {this.state.counter}</p>
      </div>
    );
  }
}

export default App;
