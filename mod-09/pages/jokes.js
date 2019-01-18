import React, { Component } from 'react';
import Header from '../components/Header';
import fetch from 'isomorphic-fetch';

class Jokes extends Component {
  static getInitialProps = async ({ req }) => {
    const res = await fetch('http://localhost:3001/jon-skeet');
    const jokes = await res.json();
    return { jokes };
  };

  render() {
    const { jokes } = this.props;

    return (
      <div>
        <h1>Jokes</h1>
        <Header />
        <ul>
          {jokes.map(j => (
            <li key={j.id}>{j.joke}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Jokes;
