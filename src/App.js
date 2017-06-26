import React, { Component } from 'react';
import Rte from './components/rte';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">

        <Rte id="rte-1"/>
        <Rte id="rte-2"/>
        <Rte id="rte-3"/>

        <div className="big-content">Content to make page scroll</div>
      </div>
    );
  }
}

export default App;
