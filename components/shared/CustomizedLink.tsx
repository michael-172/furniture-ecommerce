"use client";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

const CustomizedLink = ({ label, link }: { label: string; link?: string }) => {
  const locale = useLocale();
  return (
    <Link
      href={link ? link : "#"}
      className="flex items-center w-fit gap-1  border-b hover:border-transparent transition-all duration-200 border-primary"
    >
      <p
        className={`text-sm lg:text-base cursor-pointer font-medium leading-7 tracking-[-0.4px] ${
          locale == "en" ? "font-inter" : "font-cairo"
        }`}
      >
        {label}
      </p>
      <Image
        src="/icons/arrow-right.svg"
        alt="Arrow Left"
        width={20}
        height={20}
      />
    </Link>
  );
};

export default CustomizedLink;
