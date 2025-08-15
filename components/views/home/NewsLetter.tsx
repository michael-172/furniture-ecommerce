"use client";
import Image from "next/image";
import React, { useState } from "react";

/**
 * Newsletter signup section
 * Left / right decorative images show on large screens.
 * Replace example image URLs with local assets (e.g. /images/dresser.jpg, /images/chair.jpg).
 */
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      setStatus("loading");
      // TODO: replace with real API call
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="relative flex items-center w-full bg-[#F2F4F6] h-[360px]">
      {/* Placeholder Image */}
      <div className="absolute left-0 top-0 w-full h-full">
        <Image
          src="/images/home/NewsLetterPlaceholer.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover hidden lg:flex"
          loading="lazy"
          quality={100}
          width={1920}
          height={1920}
        />
      </div>
      <div className="mx-auto max-w-full px-4 sm:px-6">
        <div className="relative flex items-center justify-center ">
          {/* Center content */}
          <div className="w-[540px] max-w-full flex items-center">
            <div className="w-full py-12 sm:py-16">
              <div className="text-center space-y-2">
                <h2 className="text-primary text-center text-[28px] lg:text-[40px] font-medium leading-[44px] tracking-[-0.4px]">
                  Join Our Newsletter
                </h2>
                <p className=" text-primary text-center text-sm lg:text-lg font-normal leading-[30px]">
                  Sign up for deals, new products and promotions
                </p>
              </div>
              <form
                onSubmit={onSubmit}
                className="mt-8"
                noValidate
                aria-label="Newsletter signup form"
              >
                <div className="group flex items-stretch border-b border-neutral-300 focus-within:border-neutral-900 transition-colors">
                  <span className="flex items-center pr-2 text-neutral-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.913l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.906a2.25 2.25 0 0 1-1.07-1.913V6.75"
                      />
                    </svg>
                  </span>
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-neutral-500"
                    aria-describedby="newsletter-hint"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading" || !email}
                    className="pl-4 text-sm font-medium text-neutral-700 hover:text-neutral-900 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {status === "loading"
                      ? "..."
                      : status === "success"
                      ? "Done"
                      : "Signup"}
                  </button>
                </div>

                {status === "error" && (
                  <p className="mt-2 text-xs text-red-600 text-center">
                    Something went wrong. Try again.
                  </p>
                )}
                {status === "success" && (
                  <p className="mt-2 text-xs text-emerald-600 text-center">
                    Subscribed successfully.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
