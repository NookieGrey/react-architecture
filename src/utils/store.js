import createHistory from 'history/createBrowserHistory';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';

import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import { reducer as formReducer } from 'redux-form';

import dashboard from "../dashboard/dashboardReducer";
import login from "../login/loginReducer";

export const history = createHistory();
const routeMiddleware = routerMiddleware(history);

export const store = createStore(
  combineReducers({
    form: formReducer,
    router: routerReducer,
    dashboard,
    login,
  }),
  applyMiddleware(
    thunkMiddleware,
    routeMiddleware,
    loggerMiddleware,
  )
);