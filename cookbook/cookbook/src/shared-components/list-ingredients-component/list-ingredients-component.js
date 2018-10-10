import React, {Component} from 'react';
import './list-ingredients-component.css';

export class ListIngredientsComponent extends Component {
  onCheckboxClick = id => e => {
    const {recept, triggerIngridientState} = this.props;
    triggerIngridientState(recept.id, id);
  };

  renderReducer = () => {
    const {recept, viewMode} = this.props;
    if(viewMode === true) {
      return (
        <ol>
          {
            recept.ingredients && recept.ingredients.map((ingredient, index) => {
              return (<li key={ingredient.name + index}>{ingredient.name} ( {ingredient.quantity} )</li>)
            })
          }
        </ol>
      )
    } else {
      return(
        <ol>
          {
            recept.ingredients && recept.ingredients.map((ingredient, index) => {
              return (<li key={ingredient.name + index}>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id={ingredient.name}
                    onChange={this.onCheckboxClick(ingredient.id)}
                    checked={ingredient.checked ? ingredient.checked : false}
                  />
                  <label htmlFor={ingredient.name} className='checkbox'>{ingredient.name} ( {ingredient.quantity} )</label>
                </div>
              </li>)
            })
          }
        </ol>
      )
    };
  }

  render() {
    return (this.renderReducer());
  }
}
