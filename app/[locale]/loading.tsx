import { Loader2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="bg-white z-10 fixed flex flex-col items-center justify-center h-screen w-full">
      <Image
        src="/images/shared/Logo-Transparent.png"
        alt="logo"
        width={100}
        height={100}
        className="mx-auto"
      />{" "}
      <Loader2 size={20} className="animate-spin" /> &nbsp;
    </div>
  );
};

export default loading;
