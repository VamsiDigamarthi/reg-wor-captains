import axios from "axios";
import { errorMsgApi } from "./toast";

export const API = axios.create({
  baseURL: "http://localhost:5051",
});

export const imageUrl = "http://localhost:5051";

const useGetUserToken = (): string | null => {
  return localStorage.getItem("token") || null;
};

API.interceptors.request.use(
  (config) => {
    const token = useGetUserToken();

    if (token && !config.url?.includes("/login")) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers["Content-Type"] =
      config.headers["Content-Type"] || "application/json";

    return config; // Return the modified config object
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errorMessage =
      error?.response?.data?.message || "Something went wrong";
    console.log("API call failed:", errorMessage);

    errorMsgApi(errorMessage);

    return Promise.reject(error);
  }
);
