import http from "../../utils/httpClient";

export const login = (data) => {
  return http({
    method: 'post',
    url: "verifyPassword",
    data
  })
};