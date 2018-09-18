import React, {Component} from 'react';
import imgCake from '../../images/cake.png';
import {ListIngredientsComponent} from "../../shared-components/list-ingredients-component/list-ingredients-component";
import {ButtonRemoveComponent} from "../../shared-components/button-remove/button-remove";
import './edit-recept-page.css';

export class ReceptEdit extends Component {
  render() {
    return(
      <div className="Recept-edit">
        <main className="main">
          <div className="recept-edit-main">
            <div className="recept-edit-cake">
              <div className="recept-edit-cake-box">
                <img className="dish-image" src={imgCake} alt="cake" />
                  <button className="button-remove">Download</button>
                  <ButtonRemoveComponent/>
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
                  <ListIngredientsComponent />
                </div>
                <div className="recept-edit-button">
                  <button className="exchange">></button>
                  <button className="exchange">{'<'}</button>
                </div>
                <div className="recept-edit-list">
                  <ListIngredientsComponent />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}