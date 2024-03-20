import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d76bbd711a614ab394a820f4ee6b1a0c",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data.results);
  };
}

export default APIClient;
