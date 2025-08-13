import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const CategoryTitle = ({ title }: { title: string }) => {
  const locale = useLocale();
  const t = useTranslations("Home");
  return (
    <div className="flex flex-col gap-2 lg:gap-3 z-20">
      <h2 className="text-[28px] lg:text-[34px] font-medium leading-[38px] tracking-[-0.6px]">
        {title}
      </h2>
      <div className="flex items-center w-fit gap-1  border-b hover:border-transparent transition-all duration-200 border-primary">
        <p
          className={`text-sm lg:text-base cursor-pointer font-medium leading-7 tracking-[-0.4px] ${
            locale == "en" ? "font-inter" : "font-cairo"
          }`}
        >
          {t("shopNow")}
        </p>
        <Image
          src="/icons/arrow-right.svg"
          alt="Arrow Left"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default CategoryTitle;
