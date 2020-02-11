import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      error: "",
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
      error: "",
    });
  }

  decrement() {
    const counter = this.state.counter - 1;
    const state = {};
    if(counter < 0) {
      state.error = "Counter can not be less than 0";
    } else {
      state.counter = counter;
    }
    this.setState(state);
  }

  render() {
    return (
      <div dataTest="AppComponent" style={{textAlign: "center"}}>
        <p>Test App</p>
        <div dataTest="counter">Counter: {this.state.counter}</div>
        {
          this.state.error && (
            <h6 dataTest="error">{this.state.error}</h6>
          )
        }        
        <div>
          <button type="button" dataTest="incrementButton" onClick={this.increment}>
            Increment
          </button>
          <button type="button" dataTest="decrementButton" onClick={this.decrement}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default App;
