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
      <div className="custom-container">
        <LandingSection />
        <Categories />
        <Products />
        <Features />
      </div>
      <ShoppingAd />
      <div className="custom-container">
        <Articles />
      </div>
      <NewsLetter />
    </div>
  );
};

export default page;
