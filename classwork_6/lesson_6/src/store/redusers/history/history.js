import {ADD_SERVERS} from '../../action/server-action/add-server';
import {REMOVE_SERVER} from "../../action/server-action/remove-server";

export const historyReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SERVERS:{
      return [...state, {...action.payload.server, actionType: 'Add server'}];
    }
    case REMOVE_SERVER:{
      return [...state, {...action.payload.server, actionType: 'Remove server'}];
    }
    default: {
      return state;
    }
  }
};