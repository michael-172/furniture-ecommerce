import Image from "next/image";
import React from "react";

const Feature = ({
  title,
  icon,
  desc,
}: {
  title: string;
  icon: string;
  desc: string;
}) => {
  return (
    <div className="flex flex-col items-start gap-4 flex-[1_0_0] [background:var(--neutral-02100,#F3F5F7)] px-2 lg:px-8 py-12">
      <Image src={icon} alt={title} width={48} height={48} />
      <div className="flex flex-col gap-2 w-full max-w-full">
        <h3 className="text-primary text-xl font-medium leading-7">{title}</h3>
        <p className="w-[198px] max-w-full text-[color:var(--neutral-04100,#6C7275)]  text-sm font-normal leading-6">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Feature;
