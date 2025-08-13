import Categories from "@/components/views/home/Categories";
import LandingSection from "@/components/views/home/LandingSection";
import React from "react";

const page = () => {
  return (
    <div className="container px-4 mx-auto h-full w-full mb-32">
      <LandingSection />
      <Categories />
    </div>
  );
};

export default page;
