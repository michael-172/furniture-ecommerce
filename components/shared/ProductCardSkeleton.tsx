import React from "react";
import { cn } from "@/lib/utils";

const ProductCardSkeleton = ({ viewMode }: { viewMode: string }) => {
  const skeletonClass = "bg-gray-200 rounded-md animate-pulse";

  if (viewMode === "list" || viewMode === "detailed") {
    return (
      <div
        className={cn(
          "flex gap-4 p-4 border rounded-lg",
          viewMode === "detailed" && "flex-col"
        )}
      >
        <div
          className={cn(
            skeletonClass,
            "w-24 h-24",
            viewMode === "detailed" && "w-full h-48"
          )}
        ></div>
        <div className="flex-1 space-y-2">
          <div className={cn(skeletonClass, "h-6 w-3/4")}></div>
          <div className={cn(skeletonClass, "h-4 w-1/2")}></div>
          <div className={cn(skeletonClass, "h-4 w-1/4")}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="border rounded-lg p-4">
      <div className={cn(skeletonClass, "h-40 mb-4")}></div>
      <div className={cn(skeletonClass, "h-6 w-3/4 mb-2")}></div>
      <div className={cn(skeletonClass, "h-4 w-1/2")}></div>
    </div>
  );
};

export default ProductCardSkeleton;
