import React, {Component} from 'react';
import { withRouter } from 'react-router'
import {Link} from 'react-router-dom';
import './autorization-page.css';
import {API_USERS} from "../../api/api";
import connect from "react-redux/es/connect/connect";
import {autorizationUser} from "../../store/actions/user-action/autorization-user";
import {clearUser} from "../../store/actions/user-action/clear-user";

class AutorizationComponent extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      userObj: {}
    }
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    this.setState({
      userObj: {...this.state.userObj, [name]: event.target.value}
    })
  };

  onSignInClick = (e) => {
    e.preventDefault();

    const {history, autorizationUser} = this.props;

    let options = {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(this.state.userObj)
    };

    fetch(API_USERS, options)
      .then(response => {
        if(response.status >= 400) {
          return Promise.reject(response.json());
        } else {
          return response.json();
        }
      })
      .then(data => {
        autorizationUser(data);
        history.push('/recepts');
      })
      .catch(data => {
        this.setState({error: true});
      });
  };

  render() {
    const {
      error
    } = this.state;

    return(
      <div className="Login">
        <main className="main">
          <div className="authorization_form">
            <form>
              <h2 className="authorization_caption">Welcome to the book of recipes</h2>
              <hr/>
              <label>Username<input className="authorization_input" type="text"
                                    placeholder="enter username"
                                    name="user"
                                    onChange={this.handleInputChange}/></label>
              <label>Password<input className="authorization_input" type="password"
                                    placeholder="enter password"
                                    name="password"
                                    onChange={this.handleInputChange}/></label>
              {
                error ? <p className='error-message'>
                  If you were registered before, please check the correctness of the entry, otherwise register</p>
                  : ''
              }
              <button className="authorization_button"
                      onClick={this.onSignInClick}>Sign in</button>
              <Link to='/registration-page'><span className='registration'>Registration</span></Link>
            </form>
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  autorizationUser,
  clearUser
};

export const Authorization = withRouter(connect(mapStateToProps, mapDispatchToProps)(AutorizationComponent));
