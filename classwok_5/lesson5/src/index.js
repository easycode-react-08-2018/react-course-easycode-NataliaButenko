import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.css';
import {App} from './App';

const initialState = {counter: 0};

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        counter: state.counter + 1,
      };
    }
    case  'DECREMENT': {
      return {
        counter: state.counter - 1,
      };
    }
    case 'SUM': {
      return {
        counter: state.counter + action.value,
      }
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reduser);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
