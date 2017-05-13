import React from 'react';

class Output extends React.Component {
  render() {
    console.log('App state: ', this.props.input);
    return (
      <div className='output'>
        output
      </div>
    )
  }
}

export default Output;
