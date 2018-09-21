import {INGREDIENTS} from "../../actions/ingredients-action/ingredients";
import {createId} from "../../../utils/createId";

const initialState = [
  {
    name: 'Ingridient 01',
    id: createId(),
    quantity: 0
  },
  {
    name: 'Ingridient 02',
    id: createId(),
    quantity: 0
  },
  {
    name: 'Ingridient 03',
    id: createId(),
    quantity: 0
  },
  {
    name: 'Ingridient 04',
    id: createId(),
    quantity: 0
  },
  {
    name: 'Ingridient 05',
    id: createId(),
    quantity: 0
  }
];

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENTS: {

      return
    }
    default: {
      return state;
    }
  }
};
