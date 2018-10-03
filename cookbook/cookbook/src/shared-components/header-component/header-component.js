import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {Link} from 'react-router-dom';
import imgCookBook from "../../images/cookbook.png";
import './header-component.css';
import AuthUserWrapper from "../../hoc/authUserWrapper";
import { withRouter } from 'react-router';


class HeaderComponent extends Component {

  checkUserName = () => {
    const {user} = this.props;
    const isEmpty = (user) => {
      for (let key in user) {
        return `${user.message.user.name}`;
      }
      return '';
    };
    return isEmpty(user);
  };

  checkRegistration = () => {
    const {user} = this.props;
    const isEmpty = (user) => {
      for (let key in user) {
        return 'Sign out';
      }
      return 'Sign in';
    };
    return isEmpty(user);
  };

  clearUser = () => {
    const {clearUser, history} = this.props;
    clearUser();
    history.push('/autorization-page');
  };

  render() {

    return(
      <header className="header-container">
        <div className="user-login">{this.checkUserName()}</div>
        <div className="navigation">
          <button className="login-button"
                  onClick={this.clearUser}>{this.checkRegistration()}</button>
          <img src={imgCookBook} alt="Logo" className="img-cookbook" />
        </div>
      </header>
    )
  }
}

export default connect()(withRouter(AuthUserWrapper(HeaderComponent)));
