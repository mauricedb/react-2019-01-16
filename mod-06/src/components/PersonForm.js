// @ts-check
import React, { Component } from 'react';
import './PersonForm.css';
import LabeledInput from './LabeledInput';

class PersonForm extends Component {
  state = {
    firstName: 'Maurice',
    lastName: 'de Beijer',
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();

    console.log(this.state);
  };

  onChange = e => {
    const person = { ...this.state, [e.name]: e.value };
    const errors = this.validatePerson(person);
    this.setState({ ...person, errors: errors });
  };

  validatePerson(person) {
    const errors = {};
    if (!person.firstName) {
      errors.firstName = 'Is verplicht';
    } else if (person.firstName.length < 2) {
      errors.firstName = 'Te kort';
    }

    return errors;
  }

  render() {
    const { firstName, lastName, errors } = this.state;

    return (
      <div>
        <h2>Editor</h2>

        <form onSubmit={this.onSubmit}>
          <LabeledInput
            className="first-name"
            required
            value={firstName}
            name="firstName"
            label="First name:"
            errors={errors}
            onChange={this.onChange}
          />
          <LabeledInput
            value={lastName}
            name="lastName"
            label="Last name:"
            errors={errors}
            onChange={this.onChange}
          />

          <div>
            <label />
            <button disabled={Object.keys(errors).length > 0}>Save</button>
          </div>
        </form>
      </div>
    );
  }
}

// class PersonForm extends Component {
//   state = {
//     firstName: 'Maurice',
//     lastName: 'de Beijer'
//   };

//   onSubmit = e => {
//     e.preventDefault();

//     const { firstName, lastName } = e.target.elements;

//     console.log(firstName.value, lastName.value);
//   };
//   render() {
//     const { firstName, lastName } = this.state;

//     return (
//       <div>
//         <h2>Editor</h2>

//         <form onSubmit={this.onSubmit}>
//           <div>
//             <label>First name:</label>
//             <input type="text" name="firstName" defaultValue={firstName} />
//           </div>

//           <div>
//             <label>Last name:</label>
//             <input type="text" name="lastName" defaultValue={lastName} />
//           </div>

//           <div>
//             <label />
//             <button>Save</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default PersonForm;
