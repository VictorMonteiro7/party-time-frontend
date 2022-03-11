import axios from "axios";
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const Api = {
  get: (endpoint: string) => instance.get(endpoint),
  post: (endpoint: string, data: any) => instance.post(endpoint, data),
  put: (endpoint: string, data: any) => instance.put(endpoint, data),
  delete: (endpoint: string) => instance.delete(endpoint),
};
