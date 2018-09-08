import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {LoadingHOC} from "./loading-HOC";

const Count = () => {
  let coutn = 0;
    return <span>{coutn}</span>
};

const LoadHOS = LoadingHOC(Count);

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoadHOS />
      </div>
    );
  }
}

export default App;


