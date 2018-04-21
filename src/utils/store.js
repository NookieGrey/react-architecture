import {createStore, combineReducers, applyMiddleware} from 'redux';

import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import dashboard from "../dashboard/dashboardReducer";

export const store = createStore(
  combineReducers({
    dashboard,
  }),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )
);