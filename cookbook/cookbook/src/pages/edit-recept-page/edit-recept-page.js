import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {connect} from 'react-redux';
import imgCake from '../../images/cake.png';
import {ListIngredientsComponent} from "../../shared-components/list-ingredients-component/list-ingredients-component";
import {ButtonRemoveComponent} from "../../shared-components/button-remove/button-remove";
import './edit-recept-page.css';
import {removeRecept} from "../../store/actions/recepts-actions/remove-recept";
import {triggerIngridientState} from "../../store/actions/ingredients-action/ingredients";
import {removeIngredientFromRecept} from "../../store/actions/recepts-actions/remove-ingredient-from-recept";
import {ingredientsTrigger} from "../../store/actions/ingredients-action/ingredients";
import {updateListIngredientsRecept} from "../../store/actions/recepts-actions/update-list-ingredient-recept";
import {createId} from "../../utils/createId";
import {updateListRecepts} from "../../store/actions/recepts-actions/update-list-recepts";

class ReceptEditComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editableRecipe: {}
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if(!prevState.editableRecipe.id) {
      const editableRecipe = nextProps.recepts.filter(recept => {
        return recept.id === nextProps.match.params.id
      });
      if(editableRecipe.length === 0) {
        nextProps.history.push('/recepts');
        return null;
      } else {
        return {
          editableRecipe: editableRecipe[0],
        }
      }
    } else {
      return null;
    }
  };

  onIngredientClick = id => e => {
    const {ingredientsTrigger} = this.props;
    ingredientsTrigger(id);
  };

  showListIngredients = () => {
    const {ingredients} = this.props;
    return(
      <ol>
        {
          ingredients.map((ingredient, index) => {
            return(
              <li key={ingredient.name + index}>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id={ingredient.id}
                    onChange={this.onIngredientClick(ingredient.id)}
                    checked={ingredient.checked ? ingredient.checked : false}
                  />
                  <label htmlFor={ingredient.id} className='checkbox'>{ingredient.name}</label>
                </div>
              </li>
            )
          })
        }
      </ol>
    )
  };

  onRemoveIngredientsClick = (id) => (e) => {
    const {removeIngredientFromRecept}= this.props;
    removeIngredientFromRecept(id);
  };

  onAddIngredientClick = () => (e) => {
    const {ingredients, updateListIngredientsRecept} = this.props;
    const {editableRecipe} = this.state;
    const checkedIngredients = ingredients.filter(ing => ing.checked);
    ingredients.forEach(ingredient => ingredient.checked = false);
    updateListIngredientsRecept(this.state.editableRecipe.id, checkedIngredients);
  };

  changeReceptName = (event) => {
    event.preventDefault();
    const name = event.target.value;
    this.setState({
      editableRecipe: {...this.state.editableRecipe, name: name}
    })
  };

  saveUpdateRecept = () => {
    const {updateListRecepts, recepts, history} = this.props;
    updateListRecepts(this.state.editableRecipe);
    history.push('/recepts');
  };

  render() {
    const {
      editableRecipe,
    } = this.state;

    const {
      removeRecept,
      triggerIngridientState
    } = this.props;

    return(
      <div className="Recept-edit">
        <main className="main">
          <div className="recept-edit-main">
            <div className="recept-edit-cake">
              <div className="recept-edit-cake-box">
                <img className="dish-image" src={imgCake} alt="cake" />
                  <button className="button-remove">Download</button>
                  <ButtonRemoveComponent removeRecept={removeRecept} recept={editableRecipe}/>
              </div>
            </div>
            <div className="recept-edit-recept">
              <label className="recept-edit-search">Name<input className="authorization_input" type="text"
                                                               placeholder={editableRecipe.name}
                                                               onChange={this.changeReceptName}/></label>
              <div className="recept-edit-list-container">
                <div>
                  <p>List of ingredients</p>
                </div>
                <div className="recept-edit-list">
                  <ListIngredientsComponent recept={editableRecipe}
                                            triggerIngridientState={triggerIngridientState}
                                            viewMode={false}
                  />
                </div>
                <div className="recept-edit-button">
                  <button className="exchange"
                          onClick={this.onRemoveIngredientsClick(editableRecipe.id)}
                  >></button>
                  <button className="exchange"
                          onClick={this.onAddIngredientClick()}>{'<'}</button>
                </div>
                <div className="recept-edit-list">
                  {this.showListIngredients()}
                </div>
              </div>
              <div>
                <button className="button-save"
                        onClick={this.saveUpdateRecept}>Save</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recepts: state.recepts,
    ingredients: state.ingredients
  };
};

const mapDispatchToProps = {
  removeRecept,
  triggerIngridientState,
  removeIngredientFromRecept,
  ingredientsTrigger,
  updateListIngredientsRecept,
  updateListRecepts
};

export const ReceptEdit = withRouter(connect(mapStateToProps, mapDispatchToProps)(ReceptEditComponent));
