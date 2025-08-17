import { useProductsQuery } from "@/hooks/products/useProductsQuery";
import { useProductStore } from "@/lib/store/productStore";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

const InfoAndColors = () => {
  const locale = useLocale();
  const { product } = useProductStore();
  const [currentColor, setCurrentColor] = React.useState(product?.colors[0]);

  return (
    <div className="flex flex-col gap-6 py-6">
      <div className="Measurements flex flex-col gap-2">
        <p
          className={cn(
            "text-[color:var(--neutral-04100,#6C7275)] text-base font-semibold leading-[26px]",
            {
              "font-inter": locale === "en",
              "font-cairo": locale === "ar",
            }
          )}
        >
          Measurements
        </p>
        <p
          className={cn("text-black text-xl font-normal leading-8", {
            "font-inter": locale === "en",
            "font-cairo": locale === "ar",
          })}
        >
          17 1/2x20 5/8
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div
            className={cn(
              "flex items-center text-[color:var(--neutral-04100,#6C7275)] text-base font-semibold leading-[26px]",
              {
                "font-inter": locale === "en",
                "font-cairo": locale === "ar",
              }
            )}
          >
            Choose Color <ChevronRight size={18} className="mt-[1px]" />
          </div>
          <p className="text-black text-xl font-normal leading-8">
            {currentColor?.name
              ? currentColor.name.charAt(0).toUpperCase() +
                currentColor.name.slice(1)
              : "Default Color"}
          </p>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          {product?.colors &&
            product?.colors?.length > 0 &&
            product?.colors.map((el, i) => (
              <Image
                key={i}
                src={el.image}
                alt={el.name}
                width={72}
                height={72}
                className={cn("cursor-pointer", {
                  "border border-[color:var(--neutral-07100,#141718)] border-solid":
                    currentColor?.name === el.name,
                })}
                onClick={() => setCurrentColor(el)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default InfoAndColors;
