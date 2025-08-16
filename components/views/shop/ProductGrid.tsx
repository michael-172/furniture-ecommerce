"use client";
import ProductCard from "@/components/shared/ProductCard";
import { useProductsQuery } from "@/hooks/products/useProductsQuery";
import { useProductStore } from "@/lib/store/productStore";
import React from "react";
import ErrorIllustration from "@/components/shared/ErrorIllustration";
import ProductCardSkeleton from "@/components/shared/ProductCardSkeleton";

const ProductGrid = () => {
  const { data, isLoading, isError, error } =
    useProductsQuery<ProductsResponse>({
      searchParams: {
        page: 1,
        limit: 10,
      },
    });
  const { viewMode } = useProductStore();

  if (isLoading) {
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

  if (isError) {
    return <ErrorIllustration message={error?.message} />;
  }

  const renderProductCards = () => {
    return data?.data.map((product: Product) => (
      <ProductCard viewMode={viewMode} key={product.id} product={product} />
    ));
  };

  switch (viewMode) {
    case "grid":
      return (
        <div className="grid gap-4 grid-cols-2 md:grid-cols-[repeat(auto-fit,_minmax(262px,_1fr))]">
          {renderProductCards()}
        </div>
      );
    case "compact":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {renderProductCards()}
        </div>
      );
    case "list":
      return (
        <ul className="grid gap-1 grid-cols-1 lg:grid-cols-[repeat(auto-fit,_minmax(548px,_1fr))]">
          {renderProductCards()}
        </ul>
      );
    case "detailed":
      return <ul className="space-y-4">{renderProductCards()}</ul>;
    default:
      return null;
  }
};

export default ProductGrid;
