import React from 'react';
import marked from 'marked';
import PropTypes from 'prop-types';

marked.setOptions({
  sanitize: true
});

class Output extends React.Component {
  render() {
    let output = {
      __html: marked(this.props.input)
    };

    return (
      <div
        className='output'
        dangerouslySetInnerHTML={output}
        >
      </div>
    )
  }
}

Output.propTypes = {
  input: PropTypes.string.isRequired
}

export default Output;
