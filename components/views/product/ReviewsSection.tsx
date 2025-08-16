"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import axiosClient from "@/lib/api/axiosClient";
import React from "react";
import { Button } from "@/components/ui/button";
import ErrorIllustration from "@/components/shared/ErrorIllustration";

type Review = {
  _id: string;
  comment: string;
  user: { name: string };
  rating: number;
};

type ReviewsResponse = {
  data: Review[];
  pagination: {
    next?: {
      page: number;
    };
  };
};

const fetchReviews = async ({
  pageParam = 1,
  productId,
}: {
  pageParam?: number;
  productId: string;
}): Promise<ReviewsResponse> => {
  const { data } = await axiosClient.get(`/products/${productId}/reviews`, {
    params: { page: pageParam, limit: 5 },
  });
  return data;
};

const ReviewsSection = ({ productId }: { productId: string }) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery<ReviewsResponse, Error>({
    queryKey: ["reviews", productId],
    queryFn: ({ pageParam }) =>
      fetchReviews({ pageParam: pageParam as number, productId }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.pagination.next?.page;
    },
  });

  if (status === "pending") return <p>Loading reviews...</p>;
  if (status === "error") return <ErrorIllustration message={error.message} />;

  return (
    <div>
      <div className="space-y-4">
        {data.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.data.map((review) => (
              <div key={review._id} className="border-b pb-4">
                <div className="flex items-center gap-2">
                  <p className="font-bold">{review.user.name}</p>
                  {/* Add star rating here if available */}
                </div>
                <p className="text-gray-600 mt-1">{review.comment}</p>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-6">
        <Button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </Button>
      </div>
    </div>
  );
};

export default ReviewsSection;
