"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const ProductInfo = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <div className="flex items-center gap-2">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              fill={i < product.rating_average ? "currentColor" : "none"}
            />
          ))}
        </div>
        <span className="text-gray-500">
          ({product.rating_quantity} reviews)
        </span>
      </div>
      <p className="text-gray-600">{product.description}</p>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-primary">
          ${product.priceAfterDiscount}
        </span>
        <span className="text-xl text-gray-400 line-through">
          ${product.price}
        </span>
      </div>
      {/* Add color/quantity selectors and Add to Cart button here */}
      <div className="mt-4">
        <Button size="lg" className="w-full">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
