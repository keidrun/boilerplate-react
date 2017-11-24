// @flow
import React, { Component } from 'react';
import Hello from './Hello';

const MESSAGES = ['Hello!', 'Hi!', 'Good morning!', 'Good after noon!', 'Bye!!!'];
const ROLES = [
  'Developer',
  'Designer',
  'Manager',
  'Exectutive',
  'Director',
  'President',
  'Entrepreneur',
];
const randamState = () => ({
  message: MESSAGES[Math.floor(Math.random() * MESSAGES.length)],
  role: ROLES[Math.floor(Math.random() * ROLES.length)],
});

type State = {
  message: string,
  role: string,
};

class App extends Component<void, State> {
  constructor() {
    super();
    const initialState = randamState();
    this.state = {
      message: initialState.message,
      role: initialState.role,
    };

    this.handleChangeMessage = this.handleChangeMessage.bind(this);
  }

  handleChangeMessage() {
    const changedState = randamState();
    this.setState({
      message: changedState.message,
      role: changedState.role,
    });
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__text">Keid&#039;s Boilerplate of React</h1>
        <Hello
          message={this.state.message}
          role={this.state.role}
          onChangeMessage={this.handleChangeMessage}
        />
      </div>
    );
  }
}

export default App;
