import React, { Component } from 'react';

export class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    // this.setState({ count: this.state.count + 1 }, () => {

    //   this.setState({ count: this.state.count + 1 });
    // });
    // this.setState({ count: this.state.count + 1 });

    this.setState(state => ({ count: state.count + 1 }));
    this.setState(state => ({ count: state.count + 1 }));
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <div>Count: {count}</div>
        <div>
          <button onClick={this.increment}>Increment</button>
        </div>
      </div>
    );
  }
}

export default Counter;
