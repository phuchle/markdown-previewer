import React from 'react';
import Input from './Input';
import Output from './Output';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue : "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*"
    }

    this.handleUserInput = this.handleUserInput.bind(this);
  }
  handleUserInput(input) {
    this.setState({ inputValue: input });
  }
  render() {
    return (
      <div className='main-container'>
        <h1>Markdown Previewer</h1>
        <div className='components'>
          <Input
            onUserInput={this.handleUserInput}
            value={this.state.inputValue}
          />
          <Output input={this.state.inputValue} />
        </div>
      </div>
    )
  }
}

export default App;
