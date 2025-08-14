"use client";
import { Loader2 } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-8 bg-white">
      <div className="flex flex-col items-center gap-4">
        <Loader2
          className="h-10 w-10 animate-spin text-gray-900"
          aria-label="Loading"
        />
        <div className="text-center">
          <p className="text-xl font-semibold tracking-wide text-gray-900">
            Loading your experience...
          </p>
          <p className="text-sm text-gray-500">
            Curating the finest pieces for your space
          </p>
        </div>
      </div>

      <div className="w-64 h-2 rounded-full bg-gray-200 overflow-hidden">
        <div className="h-full w-full origin-left animate-[shimmer_2s_ease-in-out_infinite] bg-gradient-to-r from-gray-300 via-gray-900 to-gray-300 bg-[length:200%_100%]" />
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-50%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(50%);
          }
        }
      `}</style>
    </div>
  );
};

export default loading;
