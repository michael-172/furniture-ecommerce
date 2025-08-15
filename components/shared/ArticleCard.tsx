"use client";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useLocale } from "next-intl";
import CustomizedLink from "./CustomizedLink";

const ArticleCard = ({
  article: article,
}: {
  article: {
    id: number;
    name: string;
    image: string;
  };
}) => {
  const locale = useLocale();
  return (
    <div className="group hover:cursor-pointer h-[392px] lg:h-[413px] w-[311px]  lg:w-[357px] flex flex-col gap-3">
      <div className="h-[308px] lg:[349px] overflow-hidden w-full bg-[#F3F5F7] flex items-center justify-center relative">
        <Image
          src={article.image}
          width={200}
          height={200}
          className="size-full object-cover"
          alt="product"
        />
      </div>
      <div className="h-[72px] flex flex-col gap-1 w-full">
        <h4
          className={`self-stretch text-[color:var(--neutral-07100,#141718)] [font-feature-settings:'liga'_off,'clig'_off] ${
            locale == "en" ? "font-inter" : "font-cairo"
          } text-base font-semibold leading-[26px]`}
        >
          {article.name}
        </h4>

        <CustomizedLink label="Read More" link={`/articles/${article.id}`} />
      </div>
    </div>
  );
};

export default ArticleCard;
