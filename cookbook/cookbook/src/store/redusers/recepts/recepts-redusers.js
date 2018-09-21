import {ADD_RECEPT} from "../../actions/recepts-actions/add-recept";
import {REMOVE_RECEPT} from "../../actions/recepts-actions/remove-recept";
import {createId} from "../../../utils/createId";

const initialState = [
  {
    name: "Recept 1",
    id: createId(),
    ingredients: [
      {
        name: "Ingridient 01",
        id: createId(),
        quantity: 1
      }
    ]
  },
  {
    name: "Recept 2",
    id: createId(),
    ingredients: [
      {
        name: "Ingridient 01",
        id: createId(),
        quantity: 2
      },
      {
        name: "Ingridient 02",
        id: createId(),
        quantity: 1
      }
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
        //console.log('receptsReducer case elem', elem);
        return elem.id !== action.payload.recept.id
      });
      return newState;
    }
    default: {
      return state;
    }
  }
};
