import {ADD_RECEPT} from "../../actions/recepts-actions/add-recept";

const initialState = [
  {
    name: "Recept 1",
    id: "01",
    ingredients: [
      {
        name: "Ingridient 01",
        id: "1234",
        quantity: 1
      }
    ]
  },
  {
    name: "Recept 2",
    id: "02",
    ingredients: [
      {
        name: "Ingridient 01",
        id: "1234",
        quantity: 2
      },
      {
        name: "Ingridient 02",
        id: "1234",
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
    default: {
      return state;
    }
  };
};
