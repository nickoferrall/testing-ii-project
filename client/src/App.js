import React, { Component } from 'react';
import Dashboard from './components/Dashboard';

class App extends Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0,
    hit: 0
  };

  update = event => {
    console.log('EVCENT ', event.target.name);
    event.preventDefault();
    this.setState({
      [event.target.name]: this.state[event.target.name] + 1
    });
  };

  render() {
    console.log('Strike', this.state);
    return (
      <div className="App">
        <h1>Vamos!</h1>
        <Dashboard update={this.update} />
        <div>
          {this.state.strike}
          {this.state.ball}
          {this.state.foul}
          {this.state.hit}
        </div>
      </div>
    );
  }
}

export default App;
