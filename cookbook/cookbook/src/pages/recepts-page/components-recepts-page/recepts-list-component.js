import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import imgCake from "../../../images/cake.png";
import {ListIngredientsComponent} from "../../../shared-components/list-ingredients-component/list-ingredients-component";
import {ButtonRemoveComponent} from "../../../shared-components/button-remove/button-remove";
import './recepts-list-component.css';

export class ReceptListComponent extends Component {
  render() {
    const {
      recepts
    } = this.props;

    return(
      recepts.map(recept => {
        console.log('recept', recept);
        return(
          <div className="dish">
            <div className="img-dish">
              <img src={imgCake} alt="dish" className="img-dish"/>
            </div>
            <div className="list-ingredients-dish">
              {recept.name}
              <ListIngredientsComponent ingredients={recept.ingredients}/>
            </div>
            <div className="sum-ingredients">
              Sum of ingredients {recept.ingredients.length}
            </div>
            <div className="manage-recipe">
              <Link to='/recept-edit'>
                <button className="button-remove">Edit</button>
              </Link>
              <ButtonRemoveComponent/>
            </div>
          </div>
        )
      })

    )
  };
}
