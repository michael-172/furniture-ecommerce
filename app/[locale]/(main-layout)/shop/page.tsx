import {
  CategoryToolbar,
  ProductGrid,
  ShopBanner,
  SidebarFilters,
} from "@/components/views/shop";
import React from "react";

const page = () => {
  return (
    <div className="custom-container flex flex-col">
      <ShopBanner />
      <div className="flex flex-col lg:flex-row lg:gap-6 min-h-screen py-8 lg:py-16">
        {/* Sidebar */}
        <aside className="w-full h-[56px] lg:h-fit lg:w-[262px] border-t border-b border-[#E8ECEF] lg:border-none py-2 lg:p-0 mb-4 lg:mb-0">
          <SidebarFilters />
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-8 lg:gap-10">
          <CategoryToolbar />
          <ProductGrid />
        </main>
      </div>
    </div>
  );
};

export default page;
