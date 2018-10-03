import React, {Component} from 'react';
import {connect} from 'react-redux';
import {autorizationUser} from "../store/actions/user-action/autorization-user";
import {clearUser} from "../store/actions/user-action/clear-user";

const AuthUserWrapper = (WarappedComponent) => {
  class Base extends Component {

    componentDidMount() {
      if(!this.props.user) {
        this.props.history.push('/autorization-page')
      }
    }

    render() {
      return  <WarappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };

  const mapDispatchToProps = {
    autorizationUser,
    clearUser
  };

  return connect(mapStateToProps, mapDispatchToProps)(Base);
};

export default AuthUserWrapper;
