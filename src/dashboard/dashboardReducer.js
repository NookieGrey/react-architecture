import * as dashboardActionTypes from './dashboardActionTypes';
import { createReducer } from '@acemarke/redux-starter-kit';

const initialState = {
  user: {},
};

const reducers = {
  [dashboardActionTypes.DASHBOARD_GET_USER](state, {payload}) {
    state.user = payload;
  },
};

export default createReducer(initialState, reducers);

export const reduxDefaultReducer = (state = initialState, action) => {
  switch (action.type) {
    case dashboardActionTypes.DASHBOARD_GET_USER:
      return Object.assign({}, state, {
        user: action.payload
      });
    default:
      return state
  }
};