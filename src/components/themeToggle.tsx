"use client";

import { useThemeContext } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeToggleSwitch = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      className=" flex items-center justify-center fixed bottom-6 right-6 bg-white rounded-full w-[3rem] h-[3rem]
    bg-opacity-80 backdrop-blur-md border border-white border-opacity-40
    shadow-lg shadow-black/30 hover:scale-[1.15] transition dark:bg-gray-950"
      onClick={() => {
        toggleTheme();
      }}
    >
      {theme === "dark" ? <BsMoon /> : <BsSun />}
    </button>
  );
};

export default ThemeToggleSwitch;
