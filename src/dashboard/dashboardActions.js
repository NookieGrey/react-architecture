import * as dashboardActionTypes from "./dashboardActionTypes";

export const getUser = (payload) => ({
  type: dashboardActionTypes.DASHBOARD_GET_USER,
  payload
});