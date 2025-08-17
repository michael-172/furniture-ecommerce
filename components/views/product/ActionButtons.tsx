import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/utils";
import { Minus, Plus } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

const ActionButtons = () => {
  const locale = useLocale();
  return (
    <div className="flex flex-col gap-4 py-8">
      <div className="flex items-center gap-2 lg:gap-6">
        <div className="w-20 lg:w-[127px] flex h-8  justify-center items-center gap-[13px] rounded [background:var(--Black-100,#F5F5F5)] px-2 ">
          <Minus className="cursor-pointer" size={16} />
          <p>1</p>
          <Plus className="cursor-pointer" size={16} />
        </div>
        <div className="flex-1">
          <Button
            variant={"outline"}
            className="flex w-full justify-center items-center gap-2 rounded border border-[color:var(--neutral-07100,#141718)] px-10 py-1 border-solid"
          >
            <Image
              src={"/icons/heart.svg"}
              width={16}
              height={16}
              alt="Heart Icon"
            />
            <span
              className={cn(
                "text-primary text-center text-sm font-medium leading-6",
                {
                  "font-inter": locale === "en",
                  "font-cairo": locale === "ar",
                }
              )}
            >
              Wishlist
            </span>
          </Button>
        </div>
      </div>
      <Button className="h-8 lg:h-[52px]">Add to Cart</Button>
    </div>
  );
};

export default ActionButtons;
