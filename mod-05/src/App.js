import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';

import { store } from './store/store';

import Counter from './compnents/Counter';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
