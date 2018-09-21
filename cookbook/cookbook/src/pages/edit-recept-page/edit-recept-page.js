import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {connect} from 'react-redux';
import imgCake from '../../images/cake.png';
import {ListIngredientsComponent} from "../../shared-components/list-ingredients-component/list-ingredients-component";
import {ButtonRemoveComponent} from "../../shared-components/button-remove/button-remove";
import './edit-recept-page.css';

class ReceptEdit extends Component {
  constructor() {
    super();
    this.state = {
      idRecept: '',
      coincidentalRecept: {},
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const coincidentalRecept = nextProps.recepts.filter(recept => {
      return recept.id === nextProps.match.params.id
    });
    if(coincidentalRecept.length === 0) {
      nextProps.history.push('/recepts');
      return null;
    } else {
      return {
        idRecept: nextProps.match.params.id,
        coincidentalRecept: coincidentalRecept[0]
      }
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate nextProps', nextProps);
    console.log('shouldComponentUpdate nextState', nextState);
    return false;
  };

  showListIngredients = () => {
    const {ingredients} = this.props;
    //console.log('ingredients', ingredients);
    return(
      <ol>
        {
          ingredients.map(ingredient => {
            return <li>{ingredient.name}</li>
          })
        }
      </ol>
    )
  };

  render() {
    const {
      coincidentalRecept
    } = this.state;

    //console.log('ReceptEdit props', this.props);

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
              <label className="recept-edit-search">Name<input className="authorization_input" type="text"
                                                               placeholder={coincidentalRecept.name}/></label>
              <div className="recept-edit-list-container">
                <div>
                  <p>List of ingredients</p>
                </div>
                <div className="recept-edit-list">
                  <ListIngredientsComponent ingredients={coincidentalRecept.ingredients}/>
                </div>
                <div className="recept-edit-button">
                  <button className="exchange">></button>
                  <button className="exchange">{'<'}</button>
                </div>
                <div className="recept-edit-list">
                  {this.showListIngredients()}
                </div>
              </div>
              <div>
                <button className="button-save">Save</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log('ReceptEdit state', state);
  return {
    recepts: state.recepts,
    ingredients: state.ingredients
  };
};

export default connect(mapStateToProps, null)(withRouter(ReceptEdit));
