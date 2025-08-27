import { useProductStore } from "@/lib/store/productStore";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

const InfoAndColors = () => {
  const locale = useLocale();
  const { product } = useProductStore();
  const [currentVariant, setCurrentColor] = React.useState(
    product?.variants[0]
  );

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
            Choose Variant <ChevronRight size={18} className="mt-[1px]" />
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          {product?.variants &&
            product?.variants.length > 0 &&
            product?.variants.map((el, i) => (
              <div className="flex flex-col gap-1" key={i}>
                <p className="text-black text-xl font-normal flex items-center gap-2 leading-8">
                  {Object.entries(JSON.parse(el.attributes)).map(
                    ([key, value]) => (
                      <span key={key} className="capitalize">
                        {key}: {value as string}
                      </span>
                    )
                  )}
                </p>

                <Image
                  src={el.image}
                  alt={el.id}
                  width={72}
                  height={72}
                  className={cn("cursor-pointer", {
                    "border border-[color:var(--neutral-07100,#141718)] border-solid":
                      currentVariant?.id === el.id,
                  })}
                  onClick={() => setCurrentColor(el)}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default InfoAndColors;
