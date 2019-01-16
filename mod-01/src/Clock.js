import React, { Component } from 'react';

class Clock extends Component {
  state = {
    name: 'The clock',
    now: new Date().toLocaleTimeString()
  };

  componentDidMount() {
    this.handle = setInterval(() => {
      this.setState({ now: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }

  render() {
    const { now, name } = this.state;
    return (
      <div>
        {name} {now}
      </div>
    );
  }
}

export default Clock;
