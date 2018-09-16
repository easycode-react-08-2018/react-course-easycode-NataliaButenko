import React from 'react';

import './user.css';

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
        <div className="container">
          <div className="userPage">
            <header className='styleHeader'>{this.state.name}</header>
            <main>
              <div>
                <img src={imgSrc}
                     alt="User" className='styleImg'/>
              </div>
              <button className='styleButton'
                      onClick={() => changePage('sign_in', this.state.objUser)}>sign out</button>
            </main>
          </div>
        </div>
      </div>
    )
  }
}