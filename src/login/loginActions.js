import {push} from "react-router-redux";
import {authStore} from '../utils/AuthStore';

import * as loginActionTypes from "./loginActionTypes";

import * as loginApi from "./loginApi";

export const login = () => (dispatch, getState) => {
  const {
    form: {
      login: {
        values: {
          username,
          password,
        }
      }
    }
  } = getState();

  dispatch({
    api: loginApi.login,
    types: [
      loginActionTypes.LOGIN_REQUEST,
      loginActionTypes.LOGIN_SUCCESS,
      loginActionTypes.LOGIN_ERROR,
    ],
    request: {
      email: username,
      password,
      returnSecureToken: true,
    }
  })
    .then(({response}) => {
      authStore.setToken(response.idToken);
      dispatch(push("/private/dashboard"));
    })
    .catch(() => {
      authStore.setToken(null);
    });
};

export const logout = () => (dispatch) => {
  authStore.setToken(null);

  dispatch({
    type: loginActionTypes.LOGOUT,
  })
};