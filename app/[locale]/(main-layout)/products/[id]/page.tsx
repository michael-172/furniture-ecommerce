import ErrorIllustration from "@/components/shared/ErrorIllustration";
import ProductView from "@/components/views/product/ProductView";
import axiosServer from "@/lib/api/axiosServer";
import axios from "axios";
import { notFound } from "next/navigation";
import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  try {
    const { data: product } = await axiosServer.get(`/products/${id}`);

    return <ProductView product={product.data} />;
  } catch (error) {
    // Handle API errors
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        notFound();
      }
    }
    return (
      <ErrorIllustration
        message={
          axios.isAxiosError(error) && error.response?.data?.message
            ? error.response.data.message
            : "An unexpected error occurred. Please try again later."
        }
      />
    );
  }
};

export default Page;
