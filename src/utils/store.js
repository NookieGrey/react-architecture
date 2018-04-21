import { createStore, combineReducers } from 'redux';

import dashboard from "../dashboard/dashboardReducer";

export const store = createStore(combineReducers({
  dashboard,
}));