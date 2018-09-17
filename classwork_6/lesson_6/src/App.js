import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Server} from "./features/servers/servers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Server/>
      </div>
    );
  }
}

export default App;
