import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import imgCookBook from "../images/cookbook.png";

export class HeaderComponent extends Component {

  // checkRegisteredUser = (user) => {
  //   if(user === 'User Login') {
  //     return 'User Login'
  //   }
  //   return '';
  // };

  render() {
    return(
      <header className="header-container">
        {/*<div className="user-login">{this.props.withUser && 'User Name'}</div>*/}
        <div className="user-login">User Name</div>
        <div className="navigation">
          <Link to='/login-page'>
            <button className="login-button">Sign out</button>
          </Link>
          <img src={imgCookBook} alt="Logo" className="img-cookbook" />
        </div>
      </header>
    )
  }
}