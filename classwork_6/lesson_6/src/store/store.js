import {createStore} from 'redux';
import {rootReducer} from "./redusers/root-reducer";

export const store = createStore(rootReducer);