import axiosClient from "@/lib/api/axiosClient";
import { useUserStore } from "@/lib/store/userStore";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const getMyCart = async () => {
  const { data } = await axiosClient.get("/cart/me", {});
  return data;
};

export function useCartQueries<T>() {
  const { isAuthenticated } = useUserStore();
  const { data, isLoading, isError, error, isSuccess } = useQuery<T>({
    queryFn: () => getMyCart(),
    queryKey: ["cart"],
    enabled: isAuthenticated,
  });
  const count = React.useMemo(() => {
    if (data) {
      const cart = data as unknown as Cart;

      const itemCount = cart.cart_items.reduce(
        (acc, item) => acc + item.quantity,
        0
      );

      return itemCount;
    }
  }, [data]);
  console.log(data, "CART DATA");
  return {
    data,
    count,
    isLoading,
    isError,
    error,
    isSuccess,
  };
}
