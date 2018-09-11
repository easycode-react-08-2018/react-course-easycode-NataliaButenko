import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from "./pages/autorization-page";
import {Recepts} from "./pages/recepts-page";
import {ReceptEdit} from "./pages/edit-recept-page";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePage: 'login'
    }
  }
  render() {

    if(this.state.activePage === 'login') {
      return <Login />
    }

    if(this.state.activePage === 'recepts') {
      return <Recepts />
    }

    if(this.state.activePage === 'recept-edit') {
      return <ReceptEdit />
    }
  }
}

export default App;
