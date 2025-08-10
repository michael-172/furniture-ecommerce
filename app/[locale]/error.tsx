"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to an error reporting service (e.g., Sentry)
    console.error("Global error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Something went wrong!</h1>
      <p className="text-red-500">{error.message}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 cursor-pointer text-white rounded"
        onClick={reset}
      >
        Try Again
      </button>
    </div>
  );
}
