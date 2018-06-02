import http from "../../utils/httpClient";

export const getInfo = (data) => {
  return http({
    method: 'post',
    url: "getAccountInfo",
    data
  })
};