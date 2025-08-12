import { ArrowRight, X } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

const NavbarAd = () => {
  const locale = useLocale();
  return (
    <div className="flex relative  w-full h-10 justify-center items-center gap-3 [background:var(--neutral-02100,#F3F5F7)] py-2">
      <div className="flex  justify-center items-center gap-3">
        {" "}
        <Image src={"/icons/ticket.svg"} width={24} height={24} alt="Ticket" />
        <p
          className={`text-[#343839] text-center [font-feature-settings:'liga'_off,'clig'_off] text-sm font-semibold leading-[22px] ${
            locale == "en" ? "font-inter" : "font-cairo"
          }`}
        >
          30% off storewide — Limited time!{" "}
        </p>
        <p
          className={`text-[#377DFF] hidden lg:flex items-center gap-1 ${
            locale == "en" ? "font-inter" : "font-cairo"
          }`}
        >
          <span>Shop Now</span>
          <ArrowRight width={18} height={18} className="mt-[2px]" />
        </p>
      </div>
      <p className="absolute right-4">
        <X
          className="cursor-pointer ml-auto relative right-0"
          width={18}
          height={18}
        />
      </p>
    </div>
  );
};

export default NavbarAd;
