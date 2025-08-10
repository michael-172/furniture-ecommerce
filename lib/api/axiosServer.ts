import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { cookies } from "next/headers";

const axiosServer: AxiosInstance = axios.create({
  baseURL:
    process.env.API_URL || "https://oncotools-app.com/backend/public/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosServer.interceptors.request.use(
  async (config) => {
    // Add auth token from server-side cookies
    const cookieStore = cookies();
    const token = (await cookieStore).get("token")?.value;

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
    // Transform response data
    return response;
  },
  (error: AxiosError) => {
    // Centralized error handling
    if (error.response?.status === 401) {
      throw new Error("Unauthorized: Invalid or missing token");
    } else if (error.response?.status === 500) {
      throw new Error("Server error occurred");
    }
    throw new Error(error.response?.statusText || error.message);
  }
);

export default axiosServer;
