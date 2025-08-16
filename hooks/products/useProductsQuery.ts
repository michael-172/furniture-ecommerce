import axiosClient from "@/lib/api/axiosClient";
import { useQuery } from "@tanstack/react-query";

type getProductsSearchParams = {
  page?: number;
  limit?: number;
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
};

const getProducts = async ({
  searchParams,
}: {
  searchParams: getProductsSearchParams;
}) => {
  const { data } = await axiosClient.get("/products", {
    params: {
      ...searchParams,
    },
  });
  return data;
};

export function useProductsQuery<T>({
  searchParams,
}: {
  searchParams: getProductsSearchParams;
}) {
  const { data, isLoading, isError, error, isSuccess } = useQuery<T>({
    queryFn: () =>
      getProducts({
        searchParams,
      }),
    queryKey: ["products-list", searchParams],
  });

  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
}
