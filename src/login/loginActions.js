import * as loginActionTypes from "./loginActionTypes";

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

  if (username === "admin" && password === "password") {
    dispatch({
      type: loginActionTypes.LOGIN,
      payload: {
        token: "secret token"
      }
    })
  } else {
    alert("wrong username or password")
  }
};