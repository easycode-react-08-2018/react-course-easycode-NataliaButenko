import React, {Component} from 'react';

export class ListIngredientsComponent extends Component {
  render() {
    const{
      ingredients
    } = this.props;

    return(
      <ol>
        {
          ingredients.map(ingredient => {
            return (<li>{ingredient.name}</li>)
          })
        }
      </ol>
    )
  };
}