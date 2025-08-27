import axiosClient from "@/lib/api/axiosClient";
import { useProductStore } from "@/lib/store/productStore";
import { useInfiniteQuery } from "@tanstack/react-query";

export type GetProductsFilters = {
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
};

// Backend returns: { data: Product[], pagination: { limit, page, results, total_pages? } }
export type ProductsResponse = {
  data: Product[];
  pagination?: {
    limit: number; // requested limit
    page: number; // current page number
    results: number; // number of items actually returned in this page
    total?: number; // (optional) total items if backend adds later (camel)
    total_pages?: number; // (optional) total pages (snake_case from backend)
    totalPages?: number; // (optional) alternate camelCase for future
  };
  message?: string;
};

async function fetchProductsPage({
  pageParam = 1,
  limit,
  filters,
}: {
  pageParam?: number;
  limit: number;
  filters: GetProductsFilters;
}): Promise<ProductsResponse> {
  const { data } = await axiosClient.get("/products/all", {
    params: {
      page: pageParam,
      limit,
      ...filters,
    },
  });
  return data;
}

export function useInfiniteProductsQuery({
  limit = 10,
  filters = {},
  enabled = true,
}: {
  limit?: number;
  filters?: GetProductsFilters;
  enabled?: boolean;
}) {
  return useInfiniteQuery<ProductsResponse, Error>({
    queryKey: ["products-infinite", limit, filters],
    initialPageParam: 1,
    enabled,
    queryFn: ({ pageParam }) =>
      fetchProductsPage({ pageParam: pageParam as number, limit, filters }),
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.pagination?.page ?? 1;
      const pageLimit = lastPage.pagination?.limit ?? limit;
      const returnedCount =
        lastPage.pagination?.results ?? lastPage.data.length;

      // Determine total pages (support snake_case or camelCase)
      const totalPages = lastPage.pagination?.total_pages;

      // Stop if totalPages known and we've reached it
      if (totalPages && currentPage >= totalPages) return undefined;

      // If fewer than limit items returned, we've reached the last page
      if (returnedCount < pageLimit || returnedCount === 0) return undefined;

      return currentPage + 1;
    },
    staleTime: 30_000,
  });
}
