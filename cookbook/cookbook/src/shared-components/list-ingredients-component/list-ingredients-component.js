import React, {Component} from 'react';

export class ListIngredientsComponent extends Component {
  render() {
    const{
      ingredients
    } = this.props;
    //console.log('ListIngredientsComponent props', this.props);
    return(
      <ol>
        {
          ingredients && ingredients.map(ingredient => {
            return (<li>{ingredient.name}</li>)
          })
        }
      </ol>
    )
  };
}
