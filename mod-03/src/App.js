import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Link } from 'react-router-dom';

import './App.css';

import JonSkeet from './components/JonSkeet';
import ChuckNorris from './components/ChuckNorris';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header className="App-header">
            <Link to="/skeet">Skeet</Link>
            <Link to="/chuck">✊</Link>
            {/* <a href="/chuck">Anchor</a> */}
          </header>
          {/* <JonSkeet />
          <ChuckNorris /> */}
          <Route path="/skeet" component={JonSkeet} />
          {/* <Route path="/chuck" component={ChuckNorris} /> */}
          <Route path="/chuck" render={() => <ChuckNorris />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
