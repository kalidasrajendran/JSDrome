import React, { Component } from 'react';
import { render } from 'react-dom';
import Game from './Game'

class App extends Component {
  render() {
    return <div>
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
    </div>;
  }
}

render(<App />, document.getElementById('root'));