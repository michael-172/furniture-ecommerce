"use client";
import React from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Product", href: "/product" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

const socials = [
  { label: "Instagram", icon: "/icons/instagram.svg", href: "#" },
  { label: "Facebook", icon: "/icons/facebook.svg", href: "#" },
  { label: "YouTube", icon: "/icons/youtube.svg", href: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#141718] text-white pt-10 pb-6 mt-20 relative z-10 min-h-[249px] h-fit">
      <div className="container mx-auto px-4">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex justify-center">
              <Image
                src="/images/shared/Logo.png"
                alt="logo"
                width={60}
                height={60}
                className="object-cover"
              />
            </Link>
            <span className="hidden lg:inline-block h-6 w-px bg-white/20" />
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-semibold tracking-tight">
                Decoria.
              </span>
            </Link>
            <span className="hidden lg:inline-block h-6 w-px bg-white/20" />
            <p className="text-sm text-white/70 hidden lg:block">
              Gift & Decoration Store
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-6 lg:gap-10 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-white/10" />

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-3 text-xs text-white/60">
            <p>Copyright © 2025 Decoria. All rights reserved</p>
            <div className="flex items-center gap-6">
              {policyLinks.map((p) => (
                <Link
                  key={p.label}
                  href={p.href}
                  className="hover:text-white text-white/80 transition-colors"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-5">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="group inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/30 hover:border-white/60 transition-colors"
              >
                {/* TODO: replace placeholders with SVG icons in /public/icons */}
                <span className="text-[10px] font-medium text-white/70 group-hover:text-white">
                  {s.label.charAt(0)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
