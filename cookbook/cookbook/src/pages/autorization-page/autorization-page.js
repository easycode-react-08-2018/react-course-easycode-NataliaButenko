import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      userNameValue: '',
      passwordValue: ''
    }
  };

  changeInputUserName = (event) => {
    this.setState({
      userNameValue: event.target.value
    })
  };

  changeInputPassword = (event) => {
    this.setState({
      passwordValue: event.target.value
    })
  };

  render() {
    const {
      userNameValue,
      passwordValue
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
                                    value={userNameValue}
                                    onChange={this.changeInputUserName}/></label>
              <label>Password<input className="authorization_input" type="password"
                                    placeholder="enter password"
                                    value={passwordValue}
                                    onChange={this.changeInputPassword}/></label>
              <Link to='recepts'>
                <button className="authorization_button">Sign in</button>
              </Link>
              <label><input className="authorization_checkbox" type="checkbox" defaultChecked/>Remember me</label>
            </form>
          </div>
        </main>
      </div>
    )
  }
}