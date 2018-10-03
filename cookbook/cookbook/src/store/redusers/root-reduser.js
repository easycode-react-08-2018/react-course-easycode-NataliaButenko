import { combineReducers } from 'redux'
import {userReducer} from "./user/user-reducer";
import {receptsReducer} from "./recepts/recepts-redusers";
import {ingredientsReducer} from "./ingredients/ingredients-reducers";
import {filterTextReducer} from "./filter-text-reduser/filter-text-reduser";

export const rootReducer = combineReducers({
  recepts: receptsReducer,
  user: userReducer,
  ingredients: ingredientsReducer,
  filterText: filterTextReducer
});
