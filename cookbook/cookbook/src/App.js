import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import AutorizationComponent from "./pages/autorization-page/autorization-page";
import RegistrationComponent from "./pages/registration-page/registration-page"
import {Recepts} from "./pages/recepts-page/recepts-page";
import ReceptEditComponent from "./pages/edit-recept-page/edit-recept-page";
import {ReceptEdit} from "./pages/edit-recept-page/edit-recept-page";
import HeaderComponent from "./shared-components/header-component/header-component";
import {Authorization} from "./pages/autorization-page/autorization-page";

class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderComponent />
        <Route exact path="/autorization-page" component={Authorization}/>
        <Route exact path="/registration-page" component={RegistrationComponent}/>
        <Route exact path="/recepts" component={Recepts}/>
        <Route exact path="/recept-edit/:id" component={ReceptEdit}/>
      </Fragment>
    );
  }
}

export default App;
