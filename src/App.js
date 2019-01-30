import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

class App extends Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0
  };

  update = event => {
    event.preventDefault();
    let currentButton = event.target.name;
    if (currentButton === 'hit') {
      this.setState({
        strike: 0,
        ball: 0,
        foul: 0
      });
    } else if (currentButton === 'strike' && this.state.strike === 2) {
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
    return (
      <div className="App">
        <h1 className="test">Vamos!</h1>
        <Dashboard update={this.update} />
        <Display state={this.state} />
      </div>
    );
  }
}

export default App;
