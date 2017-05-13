import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log('value: ', event.target.value);

    this.props.onUserInput(event.target.value);
  }
  render() {
    return (
      <textarea
        className='input'
        onChange={this.handleChange}
      >

      </textarea>
    )
  }
}

export default Input;
