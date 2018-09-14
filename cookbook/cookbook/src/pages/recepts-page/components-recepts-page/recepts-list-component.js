import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import imgCake from "../../../images/cake.png";
import {ListIngredientsComponent} from "../../../shared-components/list-ingredients-component";
import {ButtonRemoveComponent} from "../../../shared-components/button-remove";

export class ReceptListComponent extends Component {
  render() {
    return(
      <div className="dish">
        <div className="img-dish">
          <img src={imgCake} alt="dish" className="img-dish"/>
        </div>
        <div className="list-ingredients-dish">
          Recept Name
          <ListIngredientsComponent />
        </div>
        <div className="sum-ingredients">
          Sum of ingredients 5
        </div>
        <div className="manage-recipe">
          <Link to='/recept-edit'>
            <button className="button-remove">Edit</button>
          </Link>
          <ButtonRemoveComponent/>
        </div>
      </div>
    )
  }
}