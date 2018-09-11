import React, {Component} from 'react';
import imgCookBook from '../images/cookbook.png';
import imgCake from '../images/cake.png';

export class ReceptEdit extends Component {
  render() {
    return(
      <div className="Recept-edit">
        <header className="header-container">
          <div className="user-login">User Login</div>
          <div className="navigation">
            <button className="login-button">Sign out</button>
            <img src={imgCookBook} alt="Logo" className="img-cookbook" />
          </div>
        </header>
        <main className="main">
          <div className="recept-edit-main">
            <div className="recept-edit-cake">
              <div className="recept-edit-cake-box">
                <img className="dish-image" src={imgCake} alt="cake" />
                  <button className="recept-control-button download">Download</button>
                  <button className="recept-control-button remove">Remove</button>
              </div>
            </div>
            <div className="recept-edit-recept">
              <h2 className="recept-name">Title</h2>
              <label className="recept-edit-search">Name<input className="authorization_input" type="text"
                                                               placeholder="name"/></label>
              <div className="recept-edit-list-container">
                <div>
                  <p>List of ingredients</p>
                </div>
                <div className="recept-edit-list">
                  <ul>
                    <li className="ul-li">Ingredient</li>
                    <li className="ul-li">Ingredient</li>
                    <li className="ul-li">Ingredient</li>
                  </ul>
                </div>
                <div className="recept-edit-button">
                  <button className="exchange">></button>
                  <button className="exchange">{'<'}</button>
                </div>
                <div className="recept-edit-list">
                  <ul>
                    <li className="ul-li">Ingredient 1</li>
                    <li className="ul-li">Ingredient 2</li>
                    <li className="ul-li">Ingredient 3</li>
                    <li className="ul-li">Ingredient 4</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}