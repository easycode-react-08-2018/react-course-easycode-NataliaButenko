import React from 'react';
import './sign_in.css';

const url = 'https://flatearth-api.herokuapp.com/api/v1/auth/login';



export class SignIn extends React.Component {
  constructor() {
    super();
    this.state= {
      inputValueUserName: '',
      inputValuePassword: '',
      objUser: {},
      error: false
    }
  }

  inputChangeUserName = (event) => {
    this.setState({
      inputValueUserName: event.target.value,
      objUser: {...this.state.objUser, ...{user: event.target.value}},
      error: false
    })
  };

  inputChangePassword = (event) => {
    this.setState({
      inputValuePassword: event.target.value,
      objUser: {...this.state.objUser, ...{password: event.target.value}},
      error: false
    })
  };

  onSignInClick = (e) => {
    e.preventDefault();
    const {changePage} = this.props;

    let options = {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(this.state.objUser) //{ user:"sa", password: "admin" }
    };

    fetch(url, options)
      .then(response => {
        if(response.status >= 400) {
          return Promise.reject(response.json());
        } else {
          return response.json();
        }
      })
      .then(data => {
        changePage('user', data);
      })
      .catch(data => {
        console.log('catch data', data);
        this.setState({error: true});
      });
  };


  render() {
    const {
      changePage,
      currentUser
    } = this.props;

    const {
      objUser,
      error
    } = this.state;
    console.log(this.state.objUser);

    return (
      <div className="App">
        <div className="container">
          <form className="formAutorization">
            <h3>Authorization</h3>
            <input type="text" className='styleInput' placeholder="User name"
             value={this.state.inputValueUserName}
             onChange={this.inputChangeUserName}/>
            <input type="password" className='styleInput' placeholder="Password"
             value={this.state.inputValuePassword}
             onChange={this.inputChangePassword}/>
            {
              error ? <p className='styleError'>
                If you were registered before, please check the correctness of the entry, otherwise register</p> : ''
            }
            {/*<p style={styleP}>Forgot your password?</p>*/}
            <button className='styleButton'
                    onClick={this.onSignInClick}>sign in</button>
            <span className='styleSpan' onClick={() => changePage('sign_up', objUser)}>Registration</span>
          </form>
        </div>
      </div>
    )
  }
}