import { createReducer } from '@acemarke/redux-starter-kit';

import * as loaderActionTypes from './loaderActionTypes';

const initState = {
  count: 0,
};

const reducers = {
  [loaderActionTypes.LOADER_START](state) {
    state.count += 1;
  },
  [loaderActionTypes.LOADER_STOP](state) {
    state.count -= 1;
  },
};

export default createReducer(initState, reducers);