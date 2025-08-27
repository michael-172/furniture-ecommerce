import "server-only";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { cookies } from "next/headers";

const axiosServer: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosServer.interceptors.request.use(
  async (config) => {
    // Add auth token from server-side cookies
    const cookieStore = cookies();
    const token = (await cookieStore).get("auth_token")?.value;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosServer.interceptors.response.use(
  (response: AxiosResponse) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response.data;
  },
  (error: AxiosError) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // We return a rejected promise with the error object,
    // so we can handle it in the page component
    return Promise.reject(error);
  }
);

export default axiosServer;
