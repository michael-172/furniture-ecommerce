"use client";
import React, { useEffect } from "react";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import { useProductStore } from "@/lib/store/productStore";

const ProductView = ({ product }: { product: Product }) => {
  const { setProduct } = useProductStore();

  useEffect(() => {
    setProduct(product);
  }, [product, setProduct]);

  return (
    <div className="custom-container py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <ProductGallery images={product.images} />
        <ProductInfo product={product} />
      </div>
      {/* <div className="mt-12">
        <ProductTabs product={product} />
      </div> */}
    </div>
  );
};

export default ProductView;
