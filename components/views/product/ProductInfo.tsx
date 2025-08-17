"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import ProductOfferTime from "./ProductOfferTime";
import InfoAndColors from "./InfoAndColors";
import ActionButtons from "./ActionButtons";

const ProductInfo = ({ product }: { product: Product }) => {
  const locale = useLocale();
  return (
    <div className="flex flex-col">
      {" "}
      <div className="flex flex-col gap-4 pb-6">
        <div className="flex items-center gap-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={16} fill="#343839" />
            ))}
          </div>
          <span
            className={cn("text-primary text-xs font-normal leading-5", {
              "font-inter": locale === "en",
              "font-cairo": locale === "ar",
            })}
          >
            {product.rating_average} Reviews
          </span>
        </div>
        <h1 className="text-primary text-[40px] font-medium leading-[44px] tracking-[-0.4px]">
          {product.name}
        </h1>
        <p
          className={cn(
            "w-[508px] max-w-full text-[color:var(--neutral-04100,#6C7275)] text-base font-normal leading-[26px]",
            {
              "font-inter": locale === "en",
              "font-cairo": locale === "ar",
            }
          )}
        >
          {product.description}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-[color:var(--Black-900,#121212)] text-[28px] font-medium leading-[34px] tracking-[-0.6px]">
            ${product.price}
          </span>
          <span className="text-[color:var(--neutral-04100,#6C7275)] text-xl font-medium leading-7 line-through">
            ${product.priceAfterDiscount}
          </span>
        </div>
        {/* Add color/quantity selectors and Add to Cart button here */}
      </div>
      <ProductOfferTime />
      <InfoAndColors />
      <ActionButtons />
      <div className="flex flex-col gap-2 py-6">
        <div className="flex items-center">
          <div
            className={cn(
              "text-[color:var(--neutral-04100,#6C7275)] w-[100px] text-xs font-normal leading-5",
              {
                "font-inter": locale === "en",
                "font-cairo": locale === "ar",
              }
            )}
          >
            SKU
          </div>
          <div
            className={cn(
              "text-[color:var(--neutral-07100,#141718)] text-xs font-normal leading-5",
              {
                "font-inter": locale === "en",
                "font-cairo": locale === "ar",
              }
            )}
          >
            {product.sku}
          </div>
        </div>
        <div className="flex items-center">
          <div
            className={cn(
              "text-[color:var(--neutral-04100,#6C7275)] w-[100px] text-xs font-normal leading-5",
              {
                "font-inter": locale === "en",
                "font-cairo": locale === "ar",
              }
            )}
          >
            CATEGORY
          </div>
          <div
            className={cn(
              "text-[color:var(--neutral-07100,#141718)] text-xs font-normal leading-5",
              {
                "font-inter": locale === "en",
                "font-cairo": locale === "ar",
              }
            )}
          >
            {product.categoryId}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
