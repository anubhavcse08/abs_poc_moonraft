import config from "../config.json";
import { get } from "../services/api-service";

export const getApiUrl = () => {
  return config.API_BASE_URL;
};

export const getMetricInfo = async(path) => {
  await get(path).then((response) => {
    return response?.data;
  })
}