import React, {Component} from 'react';
import imgCookBook from '../images/cookbook.png';
import imgCake from '../images/cake.png';

export class Recepts extends Component {
  render() {
    return(
      <div className="Recepts">
        <header className="header-container">
          <div className="user-login">User Login</div>
          <div className="navigation">
            <button className="login-button">Sign out</button>
            <img src={imgCookBook} alt="Logo" className="img-cookbook" />
          </div>
        </header>
        <main className="main-recepts">
          <div className="dashboard">
            <input className="entry-field" type="text" placeholder="Fragment of name or ingredient"/>
            <button className="find">
              To find
            </button>
            <button className="add-recipe">
              Add recipe
            </button>
          </div>
          <div className="recepts-list">
            <div className="dish">
              <div className="img-dish">
                <img src={imgCake} alt="dish" className="img-dish"/>
              </div>
              <div className="list-ingredients-dish">
                <ol>Recept Name
                  <li className="dish-ingredient">Ingredient</li>
                  <li className="dish-ingredient">Ingredient</li>
                  <li className="dish-ingredient">Ingredient</li>
                  <li className="dish-ingredient">Ingredient</li>
                  <li className="dish-ingredient">Ingredient</li>
                </ol>
              </div>
              <div className="sum-ingredients">
                Sum of ingredients 5
              </div>
              <div className="manage-recipe">
                <button className="manage-recipe-button">Edit</button>
                <button className="manage-recipe-button">Remove</button>
              </div>
            </div>

            <div className="dish">
              <div className="img-dish">
                <img src={imgCake} alt="dish" className="img-dish"/>
              </div>
              <div className="list-ingredients-dish">
                <ol>Recept Name
                  <li className="dish-ingredient">Ingredient</li>
                  <li className="dish-ingredient">Ingredient</li>
                  <li className="dish-ingredient">Ingredient</li>
                  <li className="dish-ingredient">Ingredient</li>
                  <li className="dish-ingredient">Ingredient</li>
                </ol>
              </div>
              <div className="sum-ingredients">
                Sum of ingredients 5
              </div>
              <div className="manage-recipe">
                <button className="manage-recipe-button">Edit</button>
                <button className="manage-recipe-button">Remove</button>
              </div>
            </div>

            <div className="dish">
              <div className="img-dish">
                <img src={imgCake} alt="dish" className="img-dish"/>
              </div>
              <div className="list-ingredients-dish">
                <ol>Recept Name
                  <li className="dish-ingredient">Ingredient</li>
                  <li className="dish-ingredient">Ingredient</li>
                  <li className="dish-ingredient">Ingredient</li>
                  <li className="dish-ingredient">Ingredient</li>
                  <li className="dish-ingredient">Ingredient</li>
                </ol>
              </div>
              <div className="sum-ingredients">
                Sum of ingredients 5
              </div>
              <div className="manage-recipe">
                <button className="manage-recipe-button">Edit</button>
                <button className="manage-recipe-button">Remove</button>
              </div>
            </div>

            <div className="dish">
              <div className="img-dish">
                <img src={imgCake} alt="dish" className="img-dish"/>
              </div>
              <div className="list-ingredients-dish">
                <ol>Recept Name
                  <li className="dish-ingredient">Ingredient</li>
                  <li className="dish-ingredient">Ingredient</li>
                  <li className="dish-ingredient">Ingredient</li>
                  <li className="dish-ingredient">Ingredient</li>
                  <li className="dish-ingredient">Ingredient</li>
                </ol>
              </div>
              <div className="sum-ingredients">
                Sum of ingredients 5
              </div>
              <div className="manage-recipe">
                <button className="manage-recipe-button">Edit</button>
                <button className="manage-recipe-button">Remove</button>
              </div>
            </div>

          </div>
        </main>
      </div>
    )
  }
}