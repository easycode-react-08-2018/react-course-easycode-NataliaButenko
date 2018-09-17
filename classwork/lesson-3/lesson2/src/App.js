import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {YoutubeSearch} from './youtube/youtube-search';
import {ResizeableBlock} from './youtube/block';

const url = 'https://api.github.com/users'

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      userName: '',
      toggle: true
    }
  };

  toggleBlock = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleBlock}>toggle</button>
        { this.state.toggle ? <ResizeableBlock /> : null}
      </div>
    )
  }
};

export default App;
