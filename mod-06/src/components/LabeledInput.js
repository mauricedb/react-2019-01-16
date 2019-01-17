import React, { Component } from 'react';

class LabeledInput extends Component {
  onChange = e => {
    this.props.onChange(e.target);
  };

  render() {
    const { label, errors, name } = this.props;
    const thisErrors = errors && errors[name];

    return (
      <div>
        <label>{label}</label>
        <input type="text" {...this.props} onChange={this.onChange} />
        {/* <input type="text" name={name} value={value} onChange={this.onChange} /> */}
        <div className='error-message'>{thisErrors}</div>
      </div>
    );
  }
}

export default LabeledInput;
