import React from 'react';

const container = {
  border: "1px solid #adadad",
  height: "350px",
  width: "300px",
  margin: "30px auto"
};

const styleImg = {
  width: "100px",
  height: "100px"
};

const styleHeader = {
  fontSize: "25px",
  color: "#8ac858",
  margin: "15px auto"
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

const imgSrc = "https://www.amcorro.com/wp-content/uploads/bfi_thumb/user-icon-1-n8o9zwoucu8aot1ir22s2eobbd4fg12hih6xq2bqc8.png";

export class User extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'User name',
      objUser: {}
    }
  };

  static getDerivedStateFromProps = (nextProps, prevState) => {
    return {
      name: nextProps.currentUser.message.user.name,
      objUser: nextProps
    }
  };


  render() {
    const {
      changePage,
    } = this.props;

    return (
      <div className="App">
        <div className="container" style={container}>
          <div className="userPage">
            <header style={styleHeader}>{this.state.name}</header>
            <main>
              <div>
                <img src={imgSrc}
                     alt="User" style={styleImg}/>
              </div>
              <button style={styleButton}
                      onClick={() => changePage('sign_in', this.state.objUser)}>sign out</button>
            </main>
          </div>
        </div>
      </div>
    )
  }
}