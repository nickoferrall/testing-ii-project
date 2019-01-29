import React, { Component } from 'react';
import Dashboard from './components/Dashboard';

class App extends Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0,
    hit: false
  };

  update = event => {
    console.log('EVENT ', event.target.name);
    event.preventDefault();
    let currentButton = event.target.name;
    console.log('Current button', currentButton);
    if (currentButton === 'strike' && this.state.strike === 2) {
      this.setState({
        strike: 0
      });
    } else if (currentButton === 'ball' && this.state.ball === 3) {
      this.setState({
        ball: 0
      });
    } else {
      this.setState({
        [event.target.name]: this.state[event.target.name] + 1
      });
    }
  };

  render() {
    console.log('Strike', this.state);
    return (
      <div className="App">
        <h1>Vamos!</h1>
        <Dashboard update={this.update} />
        <div>
          <div>{`Strike: ${this.state.strike}`}</div>
          <div>{`Ball: ${this.state.ball}`}</div>
          <div>{`Foul: ${this.state.foul}`}</div>
        </div>
      </div>
    );
  }
}

export default App;
