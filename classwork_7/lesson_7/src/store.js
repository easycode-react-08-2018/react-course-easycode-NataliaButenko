import {createStore, applyMiddleware} from 'redux';

import {reducer} from './reducer';

const logMiddleware = (store) => (next) => (action) => {
  console.log('prev state', store.getState());
  console.log('action', action);
  next(action);
  console.log('action', action);
  console.log('current state', store.getState());
};

const asyncActionMiddleware = store => next => action => {
  if(typeof action === 'function') {
    action(store.dispatch, store.getState)
  } else {
    next(action);
  }
};

export const store = createStore(reducer,
  {
  counter: {counter: 10}
  },
  applyMiddleware(
    logMiddleware,
    asyncActionMiddleware),
);
