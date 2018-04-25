import * as dashboardActionTypes from "./dashboardActionTypes";

import * as dashboardApi from "./dashboardApi";

export const getUser = () => (dispatch) => {
  dispatch({
    api: dashboardApi.getInfo,
    types: [
      dashboardActionTypes.DASHBOARD_GET_USER_INFO_REQUEST,
      dashboardActionTypes.DASHBOARD_GET_USER_INFO_SUCCESS,
      dashboardActionTypes.DASHBOARD_GET_USER_INFO_ERROR,
    ]
  })
};