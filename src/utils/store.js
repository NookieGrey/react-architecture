import createHistory from 'history/createBrowserHistory';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';

import apiMiddleware from "./apiMiddleware";
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import { reducer as formReducer } from 'redux-form';

import dashboard from "../dashboard/dashboardReducer";
import login from "../login/loginReducer";
import loader from "../loader/loaderReducer";

export const history = createHistory();
const routeMiddleware = routerMiddleware(history);

export const store = createStore(
  combineReducers({
    form: formReducer,
    router: routerReducer,
    loader,
    dashboard,
    login,
  }),
  applyMiddleware(
    apiMiddleware,
    thunkMiddleware,
    routeMiddleware,
    loggerMiddleware,
  )
);