import React, { Component } from 'react';
import { withRouter }from 'react-router-dom'

class ChuckNorris extends Component {
  state = { jokes: [] };

  async componentDidMount() {
    const rsp = await fetch('http://localhost:3001/chuck-norris');
    const data = await rsp.json();
    this.setState({ jokes: data });
  }

  render() {
    const { jokes } = this.state;

    // console.log(this.props);
    this.props.history.push('/');

    return (
      <div>
        <h2>Chuck Norris</h2>
        {jokes.map(joke => (
          <li key={joke.id}>{joke.joke}</li>
        ))}
      </div>
    );
  }
}

export default withRouter(ChuckNorris);

export const x = 1;
