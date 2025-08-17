"use client";
import ProductCard from "@/components/shared/ProductCard";
import { useInfiniteProductsQuery } from "@/hooks/products/useInfiniteProductsQuery";
import { useProductStore } from "@/lib/store/productStore";
import React from "react";
import ErrorIllustration from "@/components/shared/ErrorIllustration";
import ProductCardSkeleton from "@/components/shared/ProductCardSkeleton";
import { Button } from "@/components/ui/button";

const ProductGrid = () => {
  const { filters, viewMode } = useProductStore();
  console.log("Current filters:", filters.categoryId);
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteProductsQuery({
    limit: 1,
    filters,
  });

  if (status === "pending") {
    return (
      <div
        className={`grid gap-4 ${
          viewMode === "grid"
            ? "grid-cols-2 md:grid-cols-[repeat(auto-fit,_minmax(262px,_1fr))]"
            : viewMode === "compact"
            ? "grid-cols-1 sm:grid-cols-2"
            : viewMode === "list"
            ? "grid-cols-1 lg:grid-cols-[repeat(auto-fit,_minmax(548px,_1fr))]"
            : "space-y-4"
        }`}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} viewMode={viewMode} />
        ))}
      </div>
    );
  }

  if (status === "error") {
    return <ErrorIllustration message={error?.message} />;
  }

  const allProducts = data?.pages.flatMap((p) => p.data) || [];

  const renderProductCards = () => {
    return allProducts.map((product: Product) => (
      <ProductCard viewMode={viewMode} key={product.id} product={product} />
    ));
  };

  const gridWrapper = (children: React.ReactNode) => (
    <div className="flex flex-col gap-6">
      {children}
      <div className="flex justify-center">
        {hasNextPage && (
          <Button
            variant={"outline"}
            className="flex justify-center items-center cursor-pointer gap-2 border border-[color:var(--neutral-07100,#141718)] px-10 py-1.5 rounded-[80px] border-solid"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading..." : "Show more"}
          </Button>
        )}
        {!hasNextPage && allProducts.length > 0 && (
          <span className="text-sm text-muted-foreground">End of results</span>
        )}
      </div>
    </div>
  );

  switch (viewMode) {
    case "grid":
      return gridWrapper(
        <div className="grid gap-4 grid-cols-2 md:grid-cols-[repeat(auto-fit,_minmax(262px,_1fr))]">
          {renderProductCards()}
        </div>
      );
    case "compact":
      return gridWrapper(
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {renderProductCards()}
        </div>
      );
    case "list":
      return gridWrapper(
        <ul className="grid gap-1 grid-cols-1 lg:grid-cols-[repeat(auto-fit,_minmax(548px,_1fr))]">
          {renderProductCards()}
        </ul>
      );
    case "detailed":
      return gridWrapper(<ul className="space-y-4">{renderProductCards()}</ul>);
    default:
      return null;
  }
};

export default ProductGrid;
