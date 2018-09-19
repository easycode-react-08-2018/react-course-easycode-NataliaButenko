import React, { Component } from 'react';
import {connect} from 'react-redux';
import {incrementCount, incrementAsyncCounter} from "./action";
import logo from './logo.svg';
import './App.css';

export class appComponent extends Component {
  createIncrement = (value) => () => {
    return this.props.incrementCount(value)
  };

  createIncrementAsync = (value) => () => {
    return this.props.incrementAsyncCounter(value)
  };

  render() {
    const {counter} = this.props;

    console.log(counter);

    return (
      <div className="App">
        <div>
          <button onClick={this.createIncrement(1)}>INCREMENT</button>
          <div>counter state: {counter}</div>
          <button onClick={this.createIncrement(-1)}>DECREMENT</button>
        </div>
        <hr />
        <div>
          <button onClick={this.createIncrementAsync(1)}>ASYNC INCREMENT</button>
          <div>counter state: {counter}</div>
          <button onClick={this.createIncrementAsync(-1)}>ASYNC DECREMENT</button>
        </div>
      </div>
    );
  }
}

const selectCounter = (state) => {
  return state.counter.counter
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    counter: selectCounter(state)
  };
};

const mapDispathToProps = {
  incrementCount,
  incrementAsyncCounter
};


export const App = connect(mapStateToProps, mapDispathToProps)(appComponent);
