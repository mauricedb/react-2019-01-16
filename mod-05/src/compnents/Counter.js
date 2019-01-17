import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const { count, increment, incrementLater } = this.props;

    return (
      <div>
        <div>Count: {count}</div>
        <div>
          <button onClick={() => increment()}>Increment</button>
          <button onClick={() => increment(5)}>Plus 5</button>
          <button onClick={() => incrementLater()}>Increment Later</button>
        </div>
      </div>
    );
  }
}

export default Counter;
