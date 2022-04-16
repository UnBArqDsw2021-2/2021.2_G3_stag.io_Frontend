// import axios from "axios";

export const baseURL = () => {
  const env = "https://stagiobackend.herokuapp.com";

  return env;
};

const axios = require('axios');

const api = axios.create({
	baseURL: baseURL(),
});

export default api;
