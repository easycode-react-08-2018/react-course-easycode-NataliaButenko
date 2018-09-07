import React from 'react';

const url = 'https://flatearth-api.herokuapp.com/api/v1/auth/login';

const container = {
  border: "1px solid #adadad",
  height: "350px",
  width: "300px",
  margin: "30px auto"
};

const styleInput = {
  width: "250px",
  height: "23px",
  display: "block",
  margin: "10px 20px",
  borderRadius: "4px"
};

const styleButton = {
  display: "block",
  backgroundColor: "#8ac858",
  color: "white",
  width: "255px",
  height: "35px",
  margin: "10px 20px",
  borderRadius: "5px",
  textTransform: "uppercase",
  cursor: "pointer",
  fontSize: "12px"
};

const styleSpan = {
  color: "#8ac858",
  fontSize: "18px"
};

const styleP = {
  fontSize: "15px",
  color: "#757575"
};

const styleError = {
  color: "red"
}

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
        <div className="container" style={container}>
          <form className="formAutorization">
            <h3>Authorization</h3>
            <input type="text" style={styleInput} placeholder="User name"
             value={this.state.inputValueUserName}
             onChange={this.inputChangeUserName}/>
            <input type="password" style={styleInput} placeholder="Password"
             value={this.state.inputValuePassword}
             onChange={this.inputChangePassword}/>
            {
              error ? <p style={styleError}>
                If you were registered before, please check the correctness of the entry, otherwise register</p> : ''
            }
            {/*<p style={styleP}>Forgot your password?</p>*/}
            <button style={styleButton}
                    onClick={this.onSignInClick}>sign in</button>
            <span style={styleSpan} onClick={() => changePage('sign_up', objUser)}>Registration</span>
          </form>
        </div>
      </div>
    )
  }
}