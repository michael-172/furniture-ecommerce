import { cn } from "@/lib/utils";
import { Minus, Plus, X } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

const CartItem = ({ item }: { item: CartItem }) => {
  const locale = useLocale();
  return (
    <div className="flex items-center w-full gap-4 h-36 border-b border-b-[color:var(--neutral-03100,#E8ECEF)] py-6">
      <div className="w-[80px] relative h-full">
        <Image
          src={item.variant.image}
          alt="Variant Image"
          fill
          objectFit="cover"
        />
      </div>
      <div className="flex-1 flex items-center gap-8 h-full">
        <div className="flex-1 flex flex-col h-full gap-2">
          <p
            className={cn(
              "previewCartItem-name w-full h-[22px] text-[color:var(--neutral-07100,#141718)] text-sm font-semibold leading-[22px]",
              {
                "font-inter": locale == "en",
                "font-cairo": locale == "ar",
              }
            )}
          >
            {item.product.name}
          </p>

          <p
            className={cn(
              "text-[color:var(--neutral-04100,#6C7275)] text-xs font-normal leading-5 flex items-center gap-2",
              {
                "font-inter": locale == "en",
                "font-cairo": locale == "ar",
              }
            )}
          >
            {Object.entries(JSON.parse(item.variant.attributes)).map(
              ([key, value]) => (
                <span key={key} className="capitalize">
                  {key}: {value as string}
                </span>
              )
            )}
          </p>

          <div className="flex w-20 h-8 justify-center items-center gap-2.5 rounded border border-[color:var(--neutral-04100,#6C7275)] px-2 py-3 border-solid">
            <Minus className="cursor-pointer" size={16} />
            <p
              className={cn(
                "text-[color:var(--Black-900,#121212)] text-center text-xs font-semibold leading-5",
                {
                  "font-inter": locale == "en",
                  "font-cairo": locale == "ar",
                }
              )}
            >
              {item.quantity}
            </p>
            <Plus className="cursor-pointer" size={16} />
          </div>
        </div>
        <div className="w-[44px] flex flex-col gap-2 items-end text-right justify-start h-full">
          <p className="text-[color:var(--Black-900,#121212)] text-sm font-semibold leading-[22px]">
            ${item.product.price * item.quantity}
          </p>
          <X className="cursor-pointer" size={24} color="#6C7275" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
