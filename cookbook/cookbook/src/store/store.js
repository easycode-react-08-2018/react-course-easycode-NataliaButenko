import {createStore} from 'redux';
import {rootReducer} from "./redusers/root-reduser";

export const store = createStore(rootReducer);
