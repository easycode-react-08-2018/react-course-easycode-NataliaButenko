import {AUTH_USER_SUCCESS} from "../../actions/user-action/autorization-user";
import {CLEAR_USER} from "../../actions/user-action/clear-user";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER_SUCCESS: {
      return action.payload.user;
    }
    case CLEAR_USER: {
      return {};
    }
    default: {
      return state;
    }
  }
};
