import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increment} from "./action/increment";
import {dicrement} from "./action/dicrement";
import {sum} from './action/sum'
import logo from './logo.svg';
import './App.css';

export class AppComponent extends Component {
  state = {
    inputValue: ''
  };

  updateInput =(event) => {
    const {
      name,
      value
    } = event.target;
    this.setState({
      [name]: +value,
    })
  };

  clearInput() {
    this.setState({
      inputValue: ''
    })
  };

  render() {
    const {
      increment,
      dicrement,
      counter,
      sum
    } = this.props;

    const {inputValue} = this.state;

    return (
      <div className="App">
        <button onClick={increment}>INCREMENT</button>
        <p>counter: {counter}</p>
        <button onClick={dicrement}>DECREMENT</button>
        <input type="text" onChange={this.updateInput}
        value={inputValue} name='inputValue'/>
        <button onClick={() => {
          sum(+inputValue);
          this.clearInput();
        }}>sum</button>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    redux: 'is a power',
  }
};

export const App = connect(mapStateToProps, {
  increment,
  dicrement,
  sum
})(AppComponent);