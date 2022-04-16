// import axios from "axios";

export const baseURL = () => {
  const env = "https://stagiobackend.herokuapp.com";

  return env;
};

const axios = require('axios');

export const api = axios.create({
	baseURL: baseURL(),
});

export const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};