import React, { Component } from 'react';

class JonSkeet extends Component {
  state = { jokes: [] };

  async componentDidMount() {
    const rsp = await fetch('http://localhost:3001/jon-skeet');
    const data = await rsp.json();
    this.setState({ jokes: data });
  }

  render() {
    const { jokes } = this.state;

    return (
      <div>
        <h2>Jon Skeet</h2>
        {jokes.map(joke => (
          <li key={joke.id}>{joke.joke}</li>
        ))}
      </div>
    );
  }
}

export default JonSkeet;
