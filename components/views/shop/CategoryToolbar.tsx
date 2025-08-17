"use client";
import { useLocale } from "next-intl";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import ViewToggle from "./filters/ViewToggle";
import { cn } from "@/lib/utils";
import { useProductStore } from "@/lib/store/productStore";

const CategoryToolbar = () => {
  const locale = useLocale();
  const { setFilters } = useProductStore();

  const filters = [
    { label: "A to Z", value: "A-Z" },
    { label: "Z to A", value: "Z-A" },
    { label: "Highest Price", value: "high-to-low" },
    { label: "Lowest Price", value: "low-to-high" },
  ];
  return (
    <div className="h-fit flex items-center justify-between">
      <p
        className={`text-black text-xl font-semibold leading-8 ${
          locale === "en" ? "font-inter" : "font-cairo"
        }`}
      >
        Living Room
      </p>

      <div className="flex flex-1 items-center justify-end gap-8">
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer flex items-center gap-1">
            <p
              className={`${
                locale == "en" ? "font-inter" : "font-cairo"
              } text-[color:var(--Black-900,#121212)] text-base font-semibold leading-[26px]`}
            >
              Sort By
            </p>
            <ChevronDown size={20} color="#121212" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {filters.map((filter) => (
              <DropdownMenuItem
                key={filter.value}
                className="cursor-pointer"
                onClick={() => setFilters({ sortBy: filter.value })}
              >
                {filter.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className={cn("hidden lg:inline-flex")}>
          <ViewToggle />{" "}
        </div>
      </div>
    </div>
  );
};

export default CategoryToolbar;
