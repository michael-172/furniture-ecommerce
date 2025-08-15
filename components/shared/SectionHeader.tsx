import React from "react";
import CustomizedLink from "./CustomizedLink";

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="w-full flex items-center justify-between">
      <h2 className="text-black text-[34px] font-medium lg:text-[40px] lg:font-medium leading-[44px]">
        {title}
      </h2>
      <CustomizedLink label={subtitle} link="#" />
    </div>
  );
};

export default SectionHeader;
