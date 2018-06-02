import { createReducer } from '@acemarke/redux-starter-kit';

import * as loginActionTypes from './loginActionTypes';

const initialState = {
  token: null,
};

const reducers = {
  [loginActionTypes.LOGIN_SUCCESS](state, {response}) {
    state.token = response.idToken;
  },
  [loginActionTypes.LOGIN_ERROR](state) {
    state.token = null;
  },
  [loginActionTypes.LOGOUT](state) {
    state.token = null;
  },
};

export default createReducer(initialState, reducers);