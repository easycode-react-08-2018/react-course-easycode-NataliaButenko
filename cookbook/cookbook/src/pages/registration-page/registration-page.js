import React, {Component} from 'react';
import { withRouter } from 'react-router';
import './registration-page.css';
import {API_REGISTRATION_USER} from "../../api/api";

class RegistrationComponent extends Component {
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

  onSignUpClick = (e) => {
    e.preventDefault();
    console.log(this.state);

    const {history} = this.props;

    let options = {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(this.state.userObj)
    };

    fetch(API_REGISTRATION_USER, options)
      .then(response => {
        if(response.status >= 400) {
          console.log('error');
          return Promise.reject(response.json())
        } else {
          return response.json();
        }
      })
      .then(data => {
        console.log('data', data);
        history.push('/autorization-page');
      })
      .catch(data => {
        console.log('catch data', data);
        this.setState({error: true});
        console.log(this.state);
      });
  };

  render() {
    const {error} =this.state;
    return(
      <div className="Login">
        <main className="main">
          <div className="registration_form">
            <form>
              <h2 className="registration_caption">Welcome to the book of recipes</h2>
              <hr/>
              <label>Email<input className="registration_input" type="email"
                                    placeholder="enter email"
                                    name="email"
                                    onChange={this.handleInputChange}/></label>
              <label>Username<input className="registration_input" type="text"
                                    placeholder="enter username"
                                    name="user"
                                    onChange={this.handleInputChange}/></label>
              <label>Password<input className="registration_input" type="password"
                                    placeholder="enter password"
                                    name="password"
                                    onChange={this.handleInputChange}/></label>
              {
                error ? <p className='error-message'>
                    Check the correctness of data entry, the password must run at least four characters,
                    the email must be correct (example: exemple@mail.ru)</p>
                  : ''
              }
              <button className="registration_button"
                      onClick={this.onSignUpClick}>Sign up</button>
            </form>
          </div>
        </main>
      </div>
    )
  }
}

export default withRouter(RegistrationComponent);
