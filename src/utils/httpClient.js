import axios from "axios";
import {config, fireBaseConfig} from "./config";
import {authStore} from './AuthStore';

const http = (options = {}) => {
  if (!options.data) {
    options.data = {}
  }

  const token = authStore.getToken();
  if (token) {
    options.data.idToken = token;
  }

  return axios.create({
    baseURL: config.BASE_URL,
    params: {
      key: fireBaseConfig.apiKey
    },
  }).request(options)
};

export default http;