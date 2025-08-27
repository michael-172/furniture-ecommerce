import { useCartQueries } from "@/hooks/cart/use-cart-queries";
import { useUserStore } from "@/lib/store/userStore";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";
import { CartDrawer } from "../views/cart/CartDrawer";

const ShoppingCart = () => {
  const { isAuthenticated } = useUserStore();
  const { data } = useCartQueries<MyCartResponse>();

  if (!isAuthenticated || !data) return null;
  return (
    <>
      <CartDrawer />
    </>
  );
};

export default ShoppingCart;
