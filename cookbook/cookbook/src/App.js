import React, {Component, Fragment} from 'react';
import {Link, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from "./pages/autorization-page/autorization-page";
import {Recepts} from "./pages/recepts-page/recepts-page";
import {ReceptEdit} from "./pages/edit-recept-page/edit-recept-page";
import {HeaderComponent} from "./shared-components/header-component/header-component";

class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderComponent withUser={true}/>
        <Route exact path="/login-page" component={Login}/>
        <Route exact path="/recepts" component={Recepts}/>
        <Route exact path="/recept-edit" component={ReceptEdit}/>
      </Fragment>
    );
  }
}

export default App;
