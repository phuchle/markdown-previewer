import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.onUserInput(event.target.value);
  }
  render() {
    return (
      <textarea
        className='input'
        value={this.props.value}
        onChange={this.handleChange}
      />
    )
  }
}

Input.propTypes = {
  onUserInput: PropTypes.func.isRequired
}

export default Input;
