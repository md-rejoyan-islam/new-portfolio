"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { FiSun } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";
import { MdOutlineImportantDevices } from "react-icons/md";
import { useOnClickOutside } from "usehooks-ts";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // New state to control dropdown visibility
  const { setTheme, theme } = useTheme();
  const ref = useRef(null);
  useEffect(() => setMounted(true), []);
  useOnClickOutside(ref, () => setIsOpen(false));
  if (!mounted)
    return (
      <button className="bg-background-secondary hover:gap-4 transition-all rounded-xl uppercase py-2 px-3 flex gap-2 items-center">
        <FiSun key={1} />
      </button>
    );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleMenus = [
    {
      id: 1,
      name: "Light",
      key: "light",
      icon: <FiSun key={1} />,
    },
    {
      id: 2,
      name: "Dark",
      key: "dark",
      icon: <LuMoonStar key={2} />,
    },
    {
      id: 3,
      name: "System",
      key: "system",
      icon: <MdOutlineImportantDevices key={3} />,
    },
  ];

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        className=" hover:bg-[var(--secondary-button)] border border-[var(--secondary-hover-button)] h-10 w-10  hover:gap-4 transition-all rounded-lg   justify-center flex gap-2 items-center  "
        onClick={toggleDropdown}
        title="Change Theme"
      >
        {toggleMenus.map((themeItem) => {
          if (themeItem.key === theme) {
            return themeItem.icon;
          }
        })}
      </button>

      {isOpen && (
        <div className="absolute right-0 bg-[var(--original-bg)] z-30 mt-2 w-32 origin-top-right rounded-md text-[var(--primary-text)] bg-dropdown shadow-xl">
          <div className="py-1">
            {toggleMenus.map((themeItem) => {
              return (
                <button
                  key={themeItem.id}
                  onClick={() => {
                    setTheme(themeItem.key);
                    setIsOpen(false);
                  }}
                  className={` flex gap-2 items-center w-full px-4 py-2 text-left text-sm hover:bg-dropdownHover ${
                    themeItem.key === theme
                      ? "bg-[var(--secondary-button)]"
                      : ""
                  } hover:bg-[var(--secondary-hover-button)]`}
                >
                  {themeItem.icon}
                  {themeItem.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
