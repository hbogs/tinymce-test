import React, { Component } from 'react';
import Rte from './components/rte';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">

        <div className="rte-container">
          <Rte id="rte-1"/>
        </div>

        <div className="rte-container">
          <Rte id="rte-2"/>
        </div>

        <div className="big-content">Content to make page scroll</div>
      </div>
    );
  }
}

export default App;
