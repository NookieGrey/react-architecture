import {notification} from 'antd';

import * as loaderActions from "../loader/loaderActions";

const apiMiddleware = ({dispatch}) => next => action => {
  if (!action.api || !action.types) {
    return next(action);
  }
  const {api, types: [START, SUCCESS, ERROR], request} = action;

  dispatch({
    type: START,
    request,
  });

  dispatch(loaderActions.start());

  return api(request)
    .then(response => {
      dispatch({
        type: SUCCESS,
        response: response.data,
        request,
      });

      dispatch(loaderActions.stop());

      return {
        response: response.data,
        request,
        responseStatus: response.status,
      };
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        error,
        request,
      });

      dispatch(loaderActions.stop());

      notification.open({
        type: "error",
        message: "error",
        description: (error.response && error.response.data && error.response.data.error && error.response.data.error.message) || error.message
      });

      throw error;
    });
};

export default apiMiddleware;