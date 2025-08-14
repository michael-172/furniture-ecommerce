"use client";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useLocale } from "next-intl";

const ProductCard = ({
  product,
}: {
  product: {
    id: number;
    name: string;
    image: string;
    price: string;
    priceAfterDiscount: string;
    rating_average: number;
  };
}) => {
  const [isItemWishlisted, setIsItemWishlisted] = React.useState(false);
  const handleAddToWishList = () => {
    setIsItemWishlisted(!isItemWishlisted);
  };
  const isNew = true;
  const discounted = true;
  const discountValue = 35;
  const locale = useLocale();
  return (
    <div className="group hover:cursor-pointer h-[392px] lg:h-[433px] w-[231px]  lg:w-[262px] flex flex-col gap-3">
      <div className="h-[308px] lg:[349px] overflow-hidden w-full bg-[#F3F5F7] flex items-center justify-center relative">
        <div className="1 absolute top-4 mx-auto w-[230px] h-fit flex items-center justify-between">
          <div className="flex flex-col gap-2">
            {isNew && (
              <p className="flex justify-center items-center gap-2 rounded [background:#FFF] w-[67px] h-[24px]">
                <span className="text-[color:var(--neutral-07100,#141718)] text-center [font-family:Inter] text-base font-bold leading-4 uppercase">
                  New
                </span>
              </p>
            )}
            {discounted && (
              <p className="flex justify-center items-center gap-2 rounded [background:#38CB89] w-[71px] h-[24px]">
                <span className="text-[color:var(--neutral-01100,#FEFEFE)] text-center [font-family:Inter] text-base font-bold leading-4 uppercase">
                  -{discountValue}%
                </span>
              </p>
            )}
          </div>
          <p
            onClick={handleAddToWishList}
            className="transition-all w-8 h-8 flex items-center justify-center bg-white rounded-full duration-200 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <Heart
              className="transition-all duration-100"
              fill={isItemWishlisted ? "#FF3D00" : "#FFF"}
              color={isItemWishlisted ? "#FF3D00" : "#6C7275"}
              size={20}
            />
          </p>
        </div>
        <div className="2 transition-all duration-200 group-hover:bottom-4 absolute -bottom-12 mx-auto w-[202px] lg:w-[230px] h-[46px]">
          <Button
            variant="default"
            className="w-full h-full rounded-lg shadow-[0_8px_16px_0_rgba(0,0,0,0.04)] cursor-pointer"
          >
            Add to Cart
          </Button>
        </div>
        <Image
          src={product.image}
          width={200}
          height={200}
          className="size-full object-contain"
          alt="product"
        />
      </div>
      <div className="h-[72px] flex flex-col gap-1 w-full">
        <div className="flex items-center justify-start gap-[2px]">
          {" "}
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={16} fill="#343839" />
          ))}
        </div>
        <h4
          className={`self-stretch text-[color:var(--neutral-07100,#141718)] [font-feature-settings:'liga'_off,'clig'_off] ${
            locale == "en" ? "font-inter" : "font-cairo"
          } text-base font-semibold leading-[26px]`}
        >
          {product.name}
        </h4>

        <div className="flex items-center gap-3">
          <p
            className={`text-[color:var(--neutral-07100,#141718)] [font-feature-settings:'liga'_off,'clig'_off] ${
              locale == "en" ? "font-inter" : "font-cairo"
            } text-sm font-semibold leading-[22px]`}
          >
            ${product.priceAfterDiscount}
          </p>
          <p
            className={`text-[color:var(--neutral-04100,#6C7275)] [font-feature-settings:'liga'_off,'clig'_off] ${
              locale == "en" ? "font-inter" : "font-cairo"
            } text-sm font-normal leading-[22px] line-through`}
          >
            ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
