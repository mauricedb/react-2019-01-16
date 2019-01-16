import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TheGreeter from './Greeter';
import Clock from './Clock';
import Jokes from './Jokes';

class App extends Component {
  state = {
    name: 'Maurice'
  };

  onNameChange = e => {
    console.log('The name has changed', e.target.value);
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React in Rotterdam.....
          </a>
          <TheGreeter firstName="Maurice" lastName="de Beijer" />
          <TheGreeter firstName="Jack" />
          <TheGreeter firstName="Mary" />
          <Clock />
          <input
            type="text"
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <Jokes />
        </header>
      </div>
    );
  }
}

export default App;
