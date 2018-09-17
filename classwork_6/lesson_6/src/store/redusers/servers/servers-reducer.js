import {ADD_SERVERS} from "../../action/server-action/add-server";
import {REMOVE_SERVER} from "../../action/server-action/remove-server";

const initialState = [
  {
    name: 'Server #1',
    id: 1
  },
  {
    name: 'Server #2',
    id: 2
  }
];

export const serversReducer = (state = initialState, action) => {
  console.log('--action', action);
  switch (action.type) {
    case ADD_SERVERS: {
      return [...state, action.payload.server]
    }
    case REMOVE_SERVER: {
      let newState = state.filter(elem => {
        return elem.id !== action.payload.server.id
      });
      return newState;
    }
    default: {
      return state;
    }
  }
};
