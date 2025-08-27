"use client";
import * as React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useCartQueries } from "@/hooks/cart/use-cart-queries";
import CartItem from "./CartItem";

export function CartDrawer() {
  const { count, data } = useCartQueries<Cart>();

  console.log(data, "DATA");
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <div className="cursor-pointer flex items-center justify-center gap-[5px]">
          <Image
            src={"/icons/shopping bag.svg"}
            width={24}
            height={24}
            alt="Search"
          />
          <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
            {count}
          </Badge>
        </div>
      </DrawerTrigger>
      <DrawerContent
        className="min-w-[413px]"
        aria-describedby="cart-description"
      >
        <div className="mx-auto h-screen max-h-screen overflow-hidden w-full flex flex-col shrink-0 bg-white px-6 py-10">
          <DrawerHeader>
            <DrawerTitle
              className={`p-0 flex-[1_0_0] text-[color:var(--Black-900,#121212)] text-[28px] font-medium leading-[34px] tracking-[-0.6px]`}
            >
              Cart
            </DrawerTitle>
          </DrawerHeader>
          <div className="flex-1 h-full ">
            <div className="h-[70%] overflow-y-auto">
              {data?.cart_items?.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="h-[20%]"></div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
