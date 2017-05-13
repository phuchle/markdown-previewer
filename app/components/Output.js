import React from 'react';
import marked from 'marked';
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

export default Output;
