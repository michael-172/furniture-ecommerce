"use client";

import { useState, useEffect } from "react";
import axiosClient from "@/lib/api/axiosClient";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useAxiosFetch<T>(url: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get<T>(url);
        setState({ data: response.data, loading: false, error: null });
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: (error as Error).message || "Failed to fetch data",
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
}
