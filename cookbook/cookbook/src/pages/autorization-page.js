import React, {Component} from 'react';
import imgCookBook from '../images/cookbook.png';

export class Login extends Component {
  render() {
    return(
      <div className="Login">
        <header className="header-container">
          <div></div>
          <div className="navigation">
            <button className="login-button">Sign in</button>
            <img src={imgCookBook} alt="Logo" className="img-cookbook" />
          </div>
        </header>
        <main className="main">
          <div className="authorization_form">
            <form>
              <h2 className="authorization_caption">Welcome to the book of recipes</h2>
              <hr/>
              <label>Username<input className="authorization_input" type="text" placeholder="enter username"/></label>
              <label>Password<input className="authorization_input" type="password"
                                    placeholder="enter password"/></label>
              <button className="authorization_button">Sign in</button>
              <label><input className="authorization_checkbox" type="checkbox" defaultChecked/>Remember me</label>
            </form>
          </div>
        </main>
      </div>
    )
  }
}