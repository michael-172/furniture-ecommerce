"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useLocale } from "next-intl";

const LandingSection = () => {
  const locale = useLocale();
  return (
    <div className="flex flex-col gap-8 w-full h-full pb-10">
      <div className="h-[304px] w-full lg:h-[536px]">
        <Swiper
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
            enabled: true,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            enabled: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          className="h-full w-full relative"
        >
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
          <div className="swiper-pagination absolute z-50 bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center px-8"></div>
          {Array.from({ length: 5 }, (_, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="h-full w-full">
                <Image
                  src={`/images/shared/home-slider.svg`}
                  width={600}
                  height={400}
                  className="size-full object-cover"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full flex flex-wrap gap-y-4">
        <div className="w-full lg:w-2/3 text-[40px] lg:text-7xl font-medium leading-[44px] lg:leading-[76px] tracking-[-2px] text-primary">
          Simply Unique<span className="text-[#6C7275]">/</span>
          <br />
          Simply Better.
        </div>
        <div
          className={`w-full lg:w-1/3 flex items-center text-[#6C7275] text-base font-normal leading-[22px] lg:leading-[26px] ${
            locale == "en" ? "font-inter" : "font-cairo"
          }`}
        >
          <p>
            <span className="text-primary">Decoria</span> is a gift &
            decorations store based in HCMC, Vietnam. Est since 2019.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
