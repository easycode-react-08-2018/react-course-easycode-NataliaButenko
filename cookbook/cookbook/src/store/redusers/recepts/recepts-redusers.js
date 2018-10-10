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
      return action.payload(state);
    }
    case REMOVE_INGREDIENT: {
      return action.payload(state);
    }
    case UPDATE_LIST_INGREDIENTS: {
      return action.payload(state);
    }
    case UPDATE_LIST_RECEPTS: {
      return action.payload(state);
    }
    default: {
      return state;
    }
  }
};
