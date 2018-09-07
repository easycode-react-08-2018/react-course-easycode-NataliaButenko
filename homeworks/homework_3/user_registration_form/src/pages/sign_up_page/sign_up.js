import React from 'react';

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

export class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValueEmail: '',
      inputValuePassword: '',
      inputValuePasswordConfirm: '',
      inputValueUserName: '',
      objUser: {},
    }
  }

  inputChangeEmail = (event) => {
    this.setState({
      inputValueEmail: event.target.value,
      // objUser: {...this.state.objUser, ...{email: event.target.value}}
    });
  };

  inputChangePassword = (event) => {
    this.setState({
      inputValuePassword: event.target.value,
      objUser: {...this.state.objUser, ...{password: event.target.value}}
    });
  };


  inputChangePasswordConfirm = (event) => {
    this.setState({
      inputValuePasswordConfirm: event.target.value,
      // objUser: {...this.state.objUser, ...{passwordConfirm: event.target.value}}
    });
  };


  inputChangeUserName = (event) => {
    this.setState({
      inputValueUserName: event.target.value,
      objUser: {...this.state.objUser, ...{user: event.target.value}}
    });
  };

  onSignUpClicl = (e) => {
    e.preventDefault();
    const {changePage} = this.props;
    const url = 'https://flatearth-api.herokuapp.com/api/v1/auth/signup';

    let options = {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(this.state.objUser) //{ user:"sa", password: "admin" }
    };

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        changePage('user', data);
      })
  };


  render() {
    const {
      changePage,
    } = this.props;

    return (
      <div className="App">
         <div className="container" style={container}>
           <form className="formRegistration">
             <h3>Registration</h3>
             <input type="email" style={styleInput} placeholder="Email"
              value={this.state.inputValueEmail}
              onChange={this.inputChangeEmail}/>
             <input type="password" style={styleInput} placeholder="Password"
              value={this.state.inputValuePassword}
              onChange={this.inputChangePassword}/>
             <input type="password" style={styleInput} placeholder="Confirm password"
              value={this.state.inputValuePasswordConfirm}
              onChange={this.inputChangePasswordConfirm}/>
             <input type="text" style={styleInput} placeholder="User name"
              value={this.state.inputValueUserName}
              onChange={this.inputChangeUserName}/>
             <button style={styleButton}
                     onClick={() => changePage('user', this.state.objUser)}>sign up</button>
           </form>
         </div>
      </div>
    )
  }
}