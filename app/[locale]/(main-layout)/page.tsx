import {
  Articles,
  Categories,
  Features,
  LandingSection,
  Products,
  ShoppingAd,
  NewsLetter,
} from "@/components/views/home";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col w-full mb-32">
      <div className="container px-4 mx-auto h-full w-full">
        <LandingSection />
        <Categories />
        <Products />
        <Features />
      </div>
      <ShoppingAd />
      <div className="container px-4 mx-auto h-full w-full">
        <Articles />
      </div>
      <NewsLetter />
    </div>
  );
};

export default page;
