import {createStore, combineReducers, applyMiddleware} from 'redux';

import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import { reducer as formReducer } from 'redux-form';

import dashboard from "../dashboard/dashboardReducer";
import login from "../login/loginReducer";

export const store = createStore(
  combineReducers({
    form: formReducer,
    dashboard,
    login,
  }),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )
);