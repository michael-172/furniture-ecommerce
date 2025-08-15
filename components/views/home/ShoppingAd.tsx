import CustomizedLink from "@/components/shared/CustomizedLink";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

const ShoppingAd = () => {
  const locale = useLocale();
  return (
    <div className="w-full min-h-[532px] h-fit grid grid-cols-1 lg:grid-cols-2 ">
      <div className="relative h-[367px] lg:h-[532px] ">
        <Image
          src="/images/shared/furniture.png"
          alt="Shopping Ad"
          className="object-cover"
          layout="fill"
        />
      </div>
      <div className="h-[367px] lg:h-[532px] container px-4 lg:px-20  mx-auto flex w-full flex-col text-start justify-center items-center shrink-0 [background:var(--neutral-02100,#F3F5F7)]">
        <div className="flex flex-col gap-6">
          {" "}
          <div className="flex flex-col gap-4">
            {" "}
            <p
              className={`self-stretch text-[color:var(--Blue,#377DFF)] ${
                locale == "en" ? "font-inter" : "font-cairo"
              } text-base font-bold leading-4 uppercase`}
            >
              SALE UP TO 35% OFF
            </p>
            <p className="self-stretch text-primary text-[40px] font-medium leading-[44px] tracking-[-0.4px]">
              HUNDREDS of <br /> New lower prices!
            </p>
            <p
              className={`max-w-full text-primary ${
                locale == "en" ? "font-inter" : "font-cairo"
              } text-xl font-normal leading-8`}
            >
              It’s more affordable than ever to give every room in your home a
              stylish makeover
            </p>
            <CustomizedLink label="Shop Now" link="/shop" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingAd;
