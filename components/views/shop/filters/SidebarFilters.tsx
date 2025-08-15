"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useWindowSize } from "react-use";
import ViewToggle from "./ViewToggle";
import { cn } from "@/lib/utils";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// components/Filters/SidebarFilters.tsx
const categories = [
  "All Rooms",
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Bathroom",
  "Dinning",
  "Outdoor",
];

const priceRanges = [
  { label: "$0.00 - 99.99", value: "0-99.99" },
  { label: "$100.00 - 199.99", value: "100-199.99" },
  { label: "$200.00 - 299.99", value: "200-299.99" },
  { label: "$300.00 - 399.99", value: "300-399.99" },
  { label: "$400.00+", value: "400+" },
];

export default function SidebarFilters() {
  const locale = useLocale();
  const [category, setCategory] = React.useState("All Rooms");
  const { width } = useWindowSize();

  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="flex items-center justify-between h-full">
        <div className="filters flex items-center gap-2">
          <Image
            src={"/icons/filter.svg"}
            alt="Filter"
            width={24}
            height={24}
          />
          <p
            className={`${
              locale == "en" ? "font-inter" : "font-cairo"
            } shrink-0 text-[color:var(--Black-900,#121212)] text-xl font-semibold leading-8`}
          >
            Filter
          </p>
        </div>

        <div className="inline-flex lg:hidden">
          <ViewToggle />
        </div>
      </div>

      {width < 1025 ? null : (
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3
              className={cn(
                "shrink-0 text-black-900 text-base uppercase font-semibold leading-[26px]",
                {
                  "font-inter": locale == "en",
                  "font-cairo": locale == "ar",
                }
              )}
            >
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setCategory(cat)}
                    className={cn(
                      "text-[#807E7E] cursor-pointer text-sm font-semibold leading-[22px]",
                      {
                        "font-inter": locale == "en",
                        "font-cairo": locale == "ar",
                        "text-black-500": category === cat,
                        "border-b border-black": category === cat,
                      }
                    )}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3
              className={cn(
                "shrink-0 text-black-900 text-base uppercase font-semibold leading-[26px]",
                {
                  "font-inter": locale == "en",
                  "font-cairo": locale == "ar",
                }
              )}
            >
              Price
            </h3>{" "}
            <div className="space-y-2">
              <div className="cursor-pointer flex w-full justify-between items-center gap-3">
                <Label
                  className={cn(
                    "cursor-pointer text-[#6C7275] text-sm font-semibold leading-[22px]",
                    {
                      "font-inter": locale == "en",
                      "font-cairo": locale == "ar",
                    }
                  )}
                  htmlFor={"All"}
                >
                  {"All Price"}
                </Label>
                <Checkbox id={"All"} />
              </div>
              {priceRanges.map((range) => (
                <div
                  key={range.value}
                  className="cursor-pointer flex w-full justify-between items-center gap-3"
                >
                  <Label
                    className={cn(
                      "cursor-pointer text-[#6C7275] text-sm font-semibold leading-[22px]",
                      {
                        "font-inter": locale == "en",
                        "font-cairo": locale == "ar",
                      }
                    )}
                    htmlFor={range.value}
                  >
                    {range.label}
                  </Label>
                  <Checkbox id={range.value} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
