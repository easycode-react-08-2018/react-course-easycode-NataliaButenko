import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import imgCake from "../../../images/cake.png";
import {ListIngredientsComponent} from "../../../shared-components/list-ingredients-component/list-ingredients-component";
import {ButtonRemoveComponent} from "../../../shared-components/button-remove/button-remove";
//import {ReceptEdit} from "../../edit-recept-page/edit-recept-page";
import './recepts-list-component.css';
//import {filterRecept} from "../../../store/actions/recepts-actions/filter-recept";

export class ReceptListComponent extends Component {

  render() {
    const {
      recepts,
      removeRecept
    } = this.props;

    return(
      recepts.map((recept, index) => {
        return(
          <div className="dish" key={recept.name + index}>
            <div className="img-dish">
              <img src={imgCake} alt="dish" className="img-dish"/>
            </div>
            <div className="list-ingredients-dish">
              {recept.name}
              <ListIngredientsComponent recept={recept} viewMode={true}/>
            </div>
            <div className="sum-ingredients">
              Sum of ingredients {recept.ingredients.length}
            </div>
            <div className="manage-recipe">
              <Link to={`/recept-edit/${recept.id}`} ><button className="button-remove">Edit</button></Link>
              <ButtonRemoveComponent recept={recept} removeRecept={removeRecept}/>
            </div>
          </div>
        )
      })

    )
  };
}
