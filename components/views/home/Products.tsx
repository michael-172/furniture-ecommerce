"use client";
import ProductCard from "@/components/shared/ProductCard";
import SectionHeader from "@/components/shared/SectionHeader";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

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
const Products = () => {
  return (
    <div className="w-full py-8 lg:py-12 lg:pb-0 flex flex-col gap-10 lg:gap-12">
      <SectionHeader title={`New Arrivals`} subtitle="More products" />
      <div className="products w-full">
        <Swiper
          spaceBetween={24}
          slidesPerView={"auto"}
          navigation
          scrollbar={{
            hide: false,
          }}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
            disableOnInteraction: true,
          }}
          loop={true}
          modules={[Pagination, Scrollbar, Autoplay]}
          pagination={{ clickable: true }}
        >
          {/* {products.map((product) => (
            <SwiperSlide className="!w-[231px] lg:!w-[262px]" key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))} */}
        </Swiper>
      </div>
    </div>
  );
};

export default Products;
