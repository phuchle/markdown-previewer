import React from 'react';
import Input from './Input';
import Output from './Output';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }

    this.handleUserInput = this.handleUserInput.bind(this);
  }
  handleUserInput(input) {
    this.setState({ userInput: input });
  }
  render() {
    return (
      <div className='main-container'>
        <h1>Markdown Previewer</h1>
        <div className='components'>
          <Input onUserInput={this.handleUserInput} />
          <Output input={this.state.userInput} />
        </div>
      </div>
    )
  }
}

export default App;
