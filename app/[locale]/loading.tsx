"use client";
import { Loader2 } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-8 bg-white">
      <div className="flex flex-col items-center gap-4">
        <Loader2
          className="h-6 w-6 animate-spin text-gray-900"
          aria-label="Loading"
        />
      </div>
    </div>
  );
};

export default loading;
