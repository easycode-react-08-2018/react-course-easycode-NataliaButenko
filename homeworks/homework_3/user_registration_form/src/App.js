import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SignUp} from "./pages/sign_up_page/sign_up";
import {SignIn} from "./pages/sign_in_page/sign_in";
import {User} from "./pages/user_page/user";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePage: 'sign_in',
      currentUser: {}
    }
  };

  changePage = (page, user) => {
    this.setState({
      activePage: page,
      currentUser: user
    })
    console.log(user);
  };

  render() {
    const {
      activePage,
      currentUser
    } = this.state;

    if(activePage === 'sign_up') {
      return <SignUp changePage={this.changePage}
                     currentUser={currentUser}/>
    };

    if(activePage === 'sign_in') {
      return <SignIn changePage={this.changePage}
                     currentUser={currentUser}/>
    };

    if(activePage === 'user') {
      return <User changePage={this.changePage}
                   currentUser={currentUser}/>
    };
  }
}

export default App;
