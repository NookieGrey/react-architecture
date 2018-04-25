import Nprogress from 'nprogress';

import * as loaderActionTypes from "./loaderActionTypes";

export const start = () => (dispatch, getState) => {
  const {
    loader: {
      count
    }
  } = getState();

  if (count === 0) {
    Nprogress.start();
  }

  dispatch({
    type: loaderActionTypes.LOADER_START,
  })
};

export const stop = () => (dispatch, getState) => {
  const {
    loader: {
      count
    }
  } = getState();

  if (count === 1) {
    Nprogress.done();
  }

  dispatch({
    type: loaderActionTypes.LOADER_STOP,
  })
};