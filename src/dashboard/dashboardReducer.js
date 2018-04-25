import * as dashboardActionTypes from './dashboardActionTypes';
import { createReducer } from '@acemarke/redux-starter-kit';

const initialState = {
  user: {},
};

const reducers = {
  [dashboardActionTypes.DASHBOARD_GET_USER_INFO_SUCCESS](state, {response}) {
    state.user = response.users[0];
  },
};

export default createReducer(initialState, reducers);