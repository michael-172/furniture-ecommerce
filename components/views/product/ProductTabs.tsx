"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewsSection from "./ReviewsSection";

const ProductTabs = ({ product }: { product: Product }) => {
  return (
    <Tabs defaultValue="reviews" className="w-full">
      <TabsList>
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
        <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="mt-4">
        <p>{product.description}</p>
      </TabsContent>
      <TabsContent value="reviews" className="mt-4">
        <ReviewsSection productId={product._id} />
      </TabsContent>
      <TabsContent value="shipping" className="mt-4">
        <p>Information about shipping and returns.</p>
      </TabsContent>
    </Tabs>
  );
};

export default ProductTabs;
