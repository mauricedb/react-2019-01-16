import React, { Component } from 'react';

export default function createErrorBoundary(TheComponent) {
  return class ErrorBoundary extends Component {
    state = {
      error: null
    };
    componentDidCatch(error, extra) {
      console.log(error);
      this.setState({ error });
    }
    render() {
      const { error } = this.state;

      if (error) {
        return (
          <div className="error" style={{ color: 'red' }}>
            {error.message}
          </div>
        );
      }

      return <TheComponent {...this.props} />;
    }
  };
}
