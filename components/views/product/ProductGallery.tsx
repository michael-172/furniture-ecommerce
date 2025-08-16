"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
const ProductGallery = ({ images }: { images: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <>
        <Swiper
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs, Navigation]}
          className="gallery-slider relative"
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
            enabled: true,
          }}
        >
          {" "}
          <div className="hidden lg:flex absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full items-center justify-between px-8">
            <div className="swiper-button-prev size-[52px] bg-white rounded-full flex items-center justify-center cursor-pointer">
              <Image
                src="/icons/arrow-right.svg"
                alt="Arrow Left"
                className="transform rotate-180"
                width={32}
                height={32}
              />
            </div>
            <div className="swiper-button-next size-[52px] bg-white rounded-full flex items-center justify-center cursor-pointer">
              <Image
                src="/icons/arrow-right.svg"
                alt="Arrow Right"
                width={32}
                height={32}
              />
            </div>
          </div>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                width={500}
                height={500}
                src={image}
                alt={`Product Image ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className="gallery-slider2"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                width={100}
                height={100}
                src={image}
                alt={`Product Image ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default ProductGallery;
