import React from "react";
import { Button } from "../ui/button";

const radiusMap: Record<string, string> = {
  md: "6px",
  lg: "50px",
  none: "",
};

const StyledButton = ({
  rounded,
  title,
  icon,
  iconPosition = "start",
}: {
  rounded: "md" | "lg" | "none";
  title: string;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
}) => {
  return (
    <Button
      style={{
        minWidth: "150px",
        height: "49px",
        borderRadius: radiusMap[rounded] || "6px",
      }}
      color="primary"
      // icon={icon}
      // iconPosition={iconPosition}
    >
      <p className="text-neutral-50 rounded-md text-base font-medium leading-[normal] tracking-[0.32px]">
        {title}
      </p>
    </Button>
  );
};

export default StyledButton;
