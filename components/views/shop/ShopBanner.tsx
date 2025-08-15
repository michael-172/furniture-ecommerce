import { useLocale } from "next-intl";
import React from "react";

const ShopBanner = () => {
  const locale = useLocale();
  return (
    <div className="w-full h-[308px] lg:h-[392px] bg-[url('/images/shop/banner.png')] bg-cover bg-center flex flex-col items-center justify-center gap-4 lg:gap-6">
      <h1 className="text-black text-[40px] lg:text-[54px] font-medium leading-[44px] tracking-[-0.4px]">
        Shop Page
      </h1>
      <p
        className={`${
          locale == "en" ? "font-inter" : "font-cairo"
        } text-[color:var(--Black-900,#121212)] text-center text-base font-normal leading-[26px]`}
      >
        Let’s design the place you always imagined.
      </p>
    </div>
  );
};

export default ShopBanner;
