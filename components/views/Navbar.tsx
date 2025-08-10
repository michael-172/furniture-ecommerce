"use client";
import React from "react";
import HamburgerToggle from "./HumbergerMenu";
import { usePathname } from "next/navigation";
import StyledButton from "../shared/StyledButton";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Badge } from "../ui/badge";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const locale = useLocale();
  const pathName = usePathname();

  const onClose = () => {
    setOpen(false);
  };

  const NavItems = [
    {
      id: 1,
      label: "Home",
      href: "",
    },
    {
      id: 4,
      label: "About",
      href: "#about",
    },
    {
      id: 2,
      label: "Projects",
      href: "#projects",
    },
    {
      id: 3,
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div className="w-full  h-[60px] shrink-0 flex items-center bg-white text-black">
      <div className="container px-4 mx-auto h-full w-full flex items-center justify-between px-4s">
        <div className="flex items-center justify-between w-full h-full">
          <Link href="/" className="flex justify-center">
            <Image
              src="/images/shared/Logo-Transparent.png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          <nav className="hidden lg:flex lg:gap-x-10 space-x-4">
            {NavItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={` text-sm font-medium  leading-[normal] tracking-[0.6px] ${
                  locale == "en" ? "font-space-grotesk" : "font-cairo"
                } text-mirage hover:text-primary transition-all duration-300 ${
                  pathName == `/${locale}${item.href}`
                    ? "text-primary"
                    : "text-[#6C7275]"
                } `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Image
              src={"/icons/search.svg"}
              width={24}
              height={24}
              alt="Search"
            />
            <Image
              src={"/icons/user-circle.svg"}
              width={24}
              height={24}
              alt="User"
            />
            <div className="flex items-center justify-center gap-[5px]">
              <Image
                src={"/icons/shopping bag.svg"}
                width={24}
                height={24}
                alt="Search"
              />
              <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                2
              </Badge>
            </div>
          </div>

          <div className="flex lg:hidden">
            <HamburgerToggle isOpen={open} setIsOpen={setOpen} />
          </div>

          {/* <Drawer
            title="Basic Drawer"
            placement="left"
            width={"80%"}
            closable={{ "aria-label": "Close Button" }}
            onClose={onClose}
            open={open}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
