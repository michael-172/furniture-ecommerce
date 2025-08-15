import React from "react";

type TitleProps = {
  children: React.ReactNode;
  fontSize?: "text-2xl" | "text-xl" | "text-lg" | string;
  fontWeight?: "font-bold" | "font-semibold" | "font-normal" | "font-medium";
  leading?: "leading-tight" | "leading-snug" | "leading-normal";
};

const Title = ({
  children,
  fontSize = "text-2xl",
  fontWeight = "font-bold",
  leading = "leading-tight",
}: TitleProps) => {
  return <h2 className={`${fontSize} ${fontWeight} ${leading}`}>{children}</h2>;
};

export default Title;
