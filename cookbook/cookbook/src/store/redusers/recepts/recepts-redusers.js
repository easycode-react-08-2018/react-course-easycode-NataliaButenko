import {ADD_RECEPT} from "../../actions/recepts-actions/add-recept";
import {REMOVE_RECEPT} from "../../actions/recepts-actions/remove-recept";
import {TRIGGER_INGRIDIENT_STATE} from "../../actions/ingredients-action/ingredients";
import {REMOVE_INGREDIENT} from "../../actions/recepts-actions/remove-ingredient-from-recept";
import {UPDATE_LIST_INGREDIENTS} from "../../actions/recepts-actions/update-list-ingredient-recept";
import {createId} from "../../../utils/createId";
import {initialState as ingredients} from '../ingredients/ingredients-reducers';
import {UPDATE_LIST_RECEPTS} from "../../actions/recepts-actions/update-list-recepts";

const initialState = [
  {
    name: "Recept 1",
    id: createId(),
    ingredients: [
        {...ingredients[0], quantity: 1}
    ]
  },
  {
    name: "Recept 2",
    id: createId(),
    ingredients: [
      {...ingredients[0], quantity: 2},
      {...ingredients[1], quantity: 1}
    ]
  }
];

export const receptsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECEPT: {
      return [...state, action.payload.recept];
    }
    case REMOVE_RECEPT: {
      let newState = state.filter(elem => {
        return elem.id !== action.payload.recept.id
      });
      return newState;
    }
    case TRIGGER_INGRIDIENT_STATE: {
      return state.map(recept => {
        if(recept.id === action.payload.receptId) {
          const newIngridients = recept.ingredients.map(ingredient => {
            if(ingredient.id === action.payload.ingredientId) {
              return {...ingredient, checked: !ingredient.checked};
            }
            return ingredient;
          });
          recept.ingredients = newIngridients;
          return recept
        }
        return recept;
      });
    }
    case REMOVE_INGREDIENT: {
      return state.map(recept => {
        if(recept.id === action.payload.receptId) {
          const newIngredients = recept.ingredients.reduce((done, ingredient) => {
            if(!ingredient.checked) {
              done.push(ingredient)
            }
            return done;
          }, []);
          recept.ingredients = newIngredients;
        }
        return recept;
      })
    }
    case UPDATE_LIST_INGREDIENTS: {
      return state.map(recept => {
        if (recept.id === action.payload.receptId) {
          let newRecept = {...recept};
          action.payload.newListIngredients.forEach(ingr => {
            const ingrIndex = newRecept.ingredients.findIndex(i => i.id === ingr.id);

            if(ingrIndex !== -1) {
              newRecept.ingredients[ingrIndex].quantity += 1;
            } else {
              newRecept.ingredients.push({...ingr, quantity: 1, checked: false});
            }
          });
          return newRecept;
        }
        return recept;
      });
    }
    case UPDATE_LIST_RECEPTS: {
      return state.map(recept => {
        if (recept.id === action.payload.newRecept.id) {
          recept = action.payload.newRecept;
          return recept;
        } else {
          return recept;
        }
      })
    }
    default: {
      return state;
    }
  }
};
