import React from "react";

const ErrorIllustration = ({ message }: { message?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-10">
      <svg
        className="w-48 h-48 text-red-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <h2 className="mt-6 text-2xl font-semibold text-gray-700">
        Oops! Something went wrong
      </h2>
      <p className="mt-2 text-gray-500">
        {message || "We're sorry, but we couldn't load the requested data."}
      </p>
    </div>
  );
};

export default ErrorIllustration;
