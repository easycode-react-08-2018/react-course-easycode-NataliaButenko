import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from "./store/store";
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';

const RouteApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <RouteApp />
  </Provider>, document.getElementById('root'));
