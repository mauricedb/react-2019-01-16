import React, { Component } from 'react';
import './App.css';

import MoviesContainer from './components/MoviesContainer';
// import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h2>Top Rated Movies</h2>
        </header>
        <MoviesContainer />
        {/* <Counter /> */}
        <footer>
          <a href="https://www.themoviedb.org/">From The Movie DB</a>
        </footer>
      </>
    );
  }
}

export default App;
