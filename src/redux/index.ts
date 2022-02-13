import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { spending } from './spending';

const rootReducer = combineReducers({ spending });

export const store = createStore(rootReducer);
