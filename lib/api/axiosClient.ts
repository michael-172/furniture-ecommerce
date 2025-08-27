import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosClient.interceptors.request.use(
  (config) => {
    // Add auth token from cookies or localStorage
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth_token="))
      ?.split("=")[1];

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
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Transform response data if needed
    return response.data;
  },
  (error: AxiosError) => {
    // Centralized error handling
    if (
      error.response?.status === 401 &&
      !window.location.href.includes("/login")
    ) {
      // Handle unauthorized: redirect to login
      window.location.href = "/login";
    } else if (error.response?.status === 500) {
      console.error("Server error:", error.message);
    }
    return Promise.reject(error.response?.data || error.message);
  }
);

export default axiosClient;
