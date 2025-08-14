import Image from "next/image";
import React from "react";
import CategoryTitle from "../shared/CategoryTitle";
import { useLocale } from "next-intl";

const CategoryCard = ({
  type,
  title,
  image,
}: {
  type: "full" | "half";
  image: string;
  title: string;
}) => {
  const locale = useLocale();
  return (
    <div
      className={`${
        type == "full" ? "h-[377px] lg:h-[664px]" : "h-[180px] lg:h-[319px]"
      } bg-[#F3F5F7] relative`}
    >
      <div
        className={`absolute left-0 z-10 ${
          type == "full"
            ? `top-6 lg:top-12 ${
                locale == "en" ? "left-3 lg:left-12" : "right-3 lg:right-12"
              }`
            : `bottom-6 lg:bottom-8 ${
                locale == "en" ? "left-3 lg:left-6" : "right-3 lg:right-6"
              }`
        }`}
      >
        <CategoryTitle title={title} />
      </div>
      <Image
        src={image}
        alt="Category Image"
        width={100}
        height={100}
        className="!size-full object-cover"
      />
    </div>
  );
};

export default CategoryCard;
