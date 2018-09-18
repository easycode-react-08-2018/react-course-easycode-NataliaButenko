import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import imgCookBook from "../../images/cookbook.png";
import './header-component.css';

export class HeaderComponent extends Component {

  render() {
    return(
      <header className="header-container">
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