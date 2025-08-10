import React from "react";

const page = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left: Image Section */}
      <div className="lg:w-1/2 flex items-center justify-center bg-gray-50 p-8">
        <img
          src="/images/chair.jpg"
          alt="Chair"
          className="max-w-full h-auto"
        />
      </div>

      {/* Right: Form Section */}
      <div className="lg:w-1/2 flex items-center justify-center p-8">
        <form className="w-full max-w-sm space-y-4">
          <h1 className="text-2xl font-bold">Sign up</h1>
          <p>
            Already have an account?{" "}
            <a href="/signin" className="text-green-600">
              Sign in
            </a>
          </p>

          <input
            type="text"
            placeholder="Your name"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full border p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
          />

          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>
              I agree with{" "}
              <a href="#" className="font-bold">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="font-bold">
                Terms of Use
              </a>
            </span>
          </label>

          <button className="w-full bg-black text-white py-2 rounded">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
