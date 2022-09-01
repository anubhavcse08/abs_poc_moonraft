import axios from "axios";
import { getApiUrl } from "../utils/commonUtil";

// Strapi Base URL
const baseURL = getApiUrl();
const headers = {
  Accept: "application/json",
};

/* Axios Instance */
const axiosInstance = axios?.create({
  baseURL,
  headers,
});

/* Request and Response Interceptor */
axiosInstance.interceptors.request?.use(
  (request) => request,
  (error) => Promise?.reject(error.response.data)
);

axiosInstance.interceptors.response?.use(
  (response) => response,
  (error) => Promise?.reject(error.response.data)
);

/* GET, POST Calls */
export const get = async (
  url,
) => {
  const apiURL =  baseURL + url;
  return axiosInstance?.get(apiURL);
};
