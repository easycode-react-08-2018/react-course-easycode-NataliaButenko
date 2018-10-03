import {INGREDIENTS_TRIGGER} from "../../actions/ingredients-action/ingredients";
import {createId} from "../../../utils/createId";

let id1 = createId();
let id2 = createId();
let id3 = createId();
let id4 = createId();
let id5 = createId();

export const initialState = [
  {
    name: 'Ingridient 01',
    id: id1,
    quantity: 0
  },
  {
    name: 'Ingridient 02',
    id: id2,
    quantity: 0
  },
  {
    name: 'Ingridient 03',
    id: id3,
    quantity: 0
  },
  {
    name: 'Ingridient 04',
    id: id4,
    quantity: 0
  },
  {
    name: 'Ingridient 05',
    id: id5,
    quantity: 0
  }
];

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENTS_TRIGGER: {
      let newIngredients = state.map(ingredient => {
        if(ingredient.id === action.payload.ingredientId) {
          return {...ingredient, checked: !ingredient.checked};
        }
        return ingredient;
      });
      return newIngredients;
    }
    default: {
      return state;
    }
  }
};
