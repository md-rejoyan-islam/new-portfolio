"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion, stagger, useAnimate } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import ThemeSwitch from "../theme/ThemeSwitch";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Blogs",
      href: "/blogs",
    },
  ];

  const pathname = usePathname();

  const [scope, animate] = useAnimate();
  const staggerList = stagger(0.1, { startDelay: 0 });

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    animate(
      "li",
      { opacity: 1, scale: 1, x: 0 },
      {
        duration: 0.2,
        delay: staggerList,
      }
    );
  }, [staggerList, animate]);

  return (
    <header
      className={`text-text-secondary h-[70px] max-w-7xl  mx-auto    px-4  `}
    >
      <div
        className="flex items-center justify-between   mx-auto h-full"
        id="up-btn"
      >
        <div className="">
          {/* for medium and large screens  */}
          <nav>
            <ul
              className="hidden md:flex font-semibold text-lg  gap-10 justify-center items-center"
              ref={scope}
            >
              <motion.li style={{ opacity: 0, scale: 0.3, x: -50 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x={0}
                  y={0}
                  viewBox="0 0 48 48"
                  xmlSpace="preserve"
                  className="w-10 h-10"
                >
                  <g>
                    <linearGradient
                      id="a"
                      x1="8.609"
                      x2="40.619"
                      y1="8.609"
                      y2="40.619"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0} stopColor="#9b8dff" />
                      <stop offset=".252" stopColor="#7d79fd" />
                      <stop offset=".555" stopColor="#5f65fb" />
                      <stop offset=".815" stopColor="#4d58f9" />
                      <stop offset={1} stopColor="#4654f9" />
                    </linearGradient>
                    <rect
                      width={40}
                      height={40}
                      x={4}
                      y={4}
                      fill="url(#a)"
                      rx={10}
                      opacity={1}
                      data-original="url(#a)"
                      className="hovered-path"
                    />
                    <path
                      fill="#fff"
                      d="M18 29.5a1.5 1.5 0 0 1-1.061-.439l-4-4a1.5 1.5 0 0 1 0-2.122l4-4a1.5 1.5 0 0 1 2.122 2.122L16.121 24l2.94 2.939A1.5 1.5 0 0 1 18 29.5zM30 29.5a1.5 1.5 0 0 1-1.061-2.561L31.879 24l-2.94-2.939a1.5 1.5 0 0 1 2.122-2.122l4 4a1.5 1.5 0 0 1 0 2.122l-4 4A1.5 1.5 0 0 1 30 29.5z"
                      opacity=".9"
                    />
                    <path
                      fill="#fff"
                      d="M22 32.5a1.514 1.514 0 0 1-.413-.058 1.5 1.5 0 0 1-1.03-1.854l4-14a1.5 1.5 0 1 1 2.884.824l-4 14A1.5 1.5 0 0 1 22 32.5z"
                      opacity=".5"
                    />
                  </g>
                </svg>
              </motion.li>
              {links.map((link, index) => (
                <motion.li
                  className={`${
                    pathname === link.href
                      ? "text-[var(--primary-button)]"
                      : "text-gray-700"
                  } hover:text-text-root group mt-2`}
                  key={index}
                  style={{ opacity: 0, scale: 0.3, x: -50 }}
                >
                  <div className="relative overflow-hidden inline-block py-1 px-0">
                    <Link href={link.href} className="relative z-10">
                      {link.name}
                    </Link>
                    <div className="absolute inset-0 border-b-2 border-button transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </nav>

          <Sheet onOpenChange={setOpenModal} open={openModal}>
            <SheetTrigger className="md:hidden">
              <RiMenu3Line className="text-3xl border-[#9498fa89] rounded-md border p-[5px] hover:bg-[#593cea24] bg-[#593cea0f] dark:bg-[#24223f47]" />
            </SheetTrigger>
            <SheetContent
              className="z-[1000] border-project-card-bg-secondary text-secondary dark:text-text-secondary md:hidden sm:max-w-[325px]  max-w-[50vw] min-w-[250px] bg-[#11082582]  backdrop-blur-[3px] "
              side={"left"}
            >
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>

              <nav className=" pt-6  w-full h-full  flex justify-center   ">
                <ul className="flex md:hidden px-6 flex-col gap-12 items-center justify-start  ">
                  {links.map((link, index) => (
                    <li
                      className="hover:text-[#64ffda]"
                      key={index}
                      onClick={() => {
                        setOpenModal(false);
                      }}
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex gap-3 items-center">
          <div
            onClick={() => {
              window.open("https://github.com/md-rejoyan-islam", "_blank");
            }}
          >
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
              Follow on GitHub <FaGithub className="w-4 h-4" />
            </button>
          </div>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
