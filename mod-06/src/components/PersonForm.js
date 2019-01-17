import React, { Component } from 'react';
import './PersonForm.css';

class PersonForm extends Component {
  state = {
    firstName: 'Maurice',
    lastName: 'de Beijer'
  };
  render() {
    const { firstName, lastName } = this.state;

    return (
      <div>
        <h2>Editor</h2>

        <div>
          <label>First name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Last name:</label>
          <input type="text" />
        </div>
        <div>
          <label />
          <button>Save</button>
        </div>
      </div>
    );
  }
}

export default PersonForm;
