import * as dashboardActionTypes from "./dashboardActionTypes";

export const getUser = () => (dispatch, getState) => {
  const response = {
    firstName: 'Harper',
    lastName: 'Perez'
  };

  setTimeout(() => {
    dispatch({
      type: dashboardActionTypes.DASHBOARD_GET_USER,
      payload: response
    })
  }, 3000);
};