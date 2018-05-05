import createHistory from 'history/createBrowserHistory';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';

import apiMiddleware from "./apiMiddleware";
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import { reducer as formReducer } from 'redux-form';

import login from "../login/loginReducer";
import loader from "../loader/loaderReducer";

export const history = createHistory();
const routeMiddleware = routerMiddleware(history);

const middlewares = [
    apiMiddleware,
    thunkMiddleware,
    routeMiddleware,
];

if (process.env.NODE_ENV === "development") {
  middlewares.push(loggerMiddleware);
}

export const store = createStore(
  createRootReducer(),
  applyMiddleware(...middlewares),
);

function createRootReducer(reducers) {
  return combineReducers({
    form: formReducer,
    router: routerReducer,
    loader,
    login,
    ...reducers
  });
}

const asyncReducers = {};

export function registerReducer(name, reducer) {
  if (asyncReducers.hasOwnProperty(name)) return;

  if (!name || !reducer) return;

  asyncReducers[name] = reducer;
  store.replaceReducer(createRootReducer(asyncReducers));
}