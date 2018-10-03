import {CHENGE_FILTER_RECEPT} from "../../actions/recepts-actions/filter-recept";

export const filterTextReducer = (state = '', action) => {
  switch (action.type) {
    case CHENGE_FILTER_RECEPT: {
      return action.payload
    }
    default: {
      return state
    }
  }
};
