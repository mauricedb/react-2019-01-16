import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createIncrementAction } from '../store/actions';

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

function mapStateToProps(state) {
  return {
    count: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: (value = 1) => dispatch(createIncrementAction(value))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
