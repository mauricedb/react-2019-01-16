import React from 'react';

class Greeter extends React.Component {
  render() {
    const { firstName, lastName } = this.props;

    return (
      <div>
        Hello {firstName} {lastName || "onbekend"}
      </div>
    );
  }
}

export default Greeter;
