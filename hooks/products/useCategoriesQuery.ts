import axiosClient from "@/lib/api/axiosClient";
import { useQuery } from "@tanstack/react-query";

const getCategories = async () => {
  const { data } = await axiosClient.get("/categories", {});
  return data;
};

export function useCategoriesQuery<T>() {
  const { data, isLoading, isError, error, isSuccess } = useQuery<T>({
    queryFn: () => getCategories(),
    queryKey: ["categories-list"],
  });

  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
}
