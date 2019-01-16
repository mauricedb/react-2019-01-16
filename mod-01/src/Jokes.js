import React, { Component } from 'react';

class Jokes extends Component {
  state = {
    jokes: []
  };

  async componentDidMount() {
    const rsp = await fetch(
      'http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript'
    );
    const data = await rsp.json();
    this.setState({ jokes: data.value });
  }
  render() {
    const { jokes } = this.state;
    return (
      <ul>
        {jokes.map((j, index) => (
          <li key={j.id}>{j.joke}</li>
        ))}
      </ul>
    );
  }
}

export default Jokes;
