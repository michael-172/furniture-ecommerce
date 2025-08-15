"use client";
import ProductCard from "@/components/shared/ProductCard";
import { useProductStore } from "@/lib/store/productStore";
import React from "react";
const products = [
  {
    id: 1,
    name: "Loveseat Sofa",
    image: "/images/dummy/product1.png",
    price: "400",
    priceAfterDiscount: "199",
    rating_average: 5,
  },
  {
    id: 2,
    name: "Table Lamp",
    image: "/images/dummy/product (1).png",
    price: "200",
    priceAfterDiscount: "55",
    rating_average: 4,
  },
  {
    id: 3,
    name: "Beige Table Lamp",
    image: "/images/dummy/product (2).png",
    price: "355",
    priceAfterDiscount: "249",
    rating_average: 3,
  },
  {
    id: 4,
    name: "Table Lamp",
    image: "/images/dummy/product (1).png",
    price: "200",
    priceAfterDiscount: "55",
    rating_average: 4,
  },
  {
    id: 5,
    name: "Beige Table Lamp",
    image: "/images/dummy/product (2).png",
    price: "355",
    priceAfterDiscount: "249",
    rating_average: 3,
  },
  {
    id: 6,
    name: "Loveseat Sofa",
    image: "/images/dummy/product1.png",
    price: "400",
    priceAfterDiscount: "199",
    rating_average: 5,
  },
  {
    id: 7,
    name: "Loveseat Sofa",
    image: "/images/dummy/product1.png",
    price: "400",
    priceAfterDiscount: "199",
    rating_average: 5,
  },
];

const ProductGrid = () => {
  const { viewMode } = useProductStore();
  switch (viewMode) {
    case "grid":
      return (
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-[repeat(auto-fit,_minmax(262px,_1fr))]">
          {products.map((product) => (
            <ProductCard
              viewMode={viewMode}
              key={product.id}
              product={product}
            />
          ))}
        </div>
      );
    case "compact":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard
              viewMode={viewMode}
              key={product.id}
              product={product}
            />
          ))}
        </div>
      );
    case "list":
      return (
        <ul className="grid gap-1 grid-cols-1 lg:grid-cols-[repeat(auto-fit,_minmax(548px,_1fr))]">
          {products.map((product) => (
            <ProductCard
              viewMode={viewMode}
              key={product.id}
              product={product}
            />
          ))}
        </ul>
      );
    case "detailed":
      return (
        <ul className="space-y-4">
          {products.map((product) => (
            <ProductCard
              viewMode={viewMode}
              key={product.id}
              product={product}
            />
          ))}
        </ul>
      );
    default:
      return null;
  }
};

export default ProductGrid;
