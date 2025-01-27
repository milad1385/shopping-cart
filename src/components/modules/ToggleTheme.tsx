"use client";
import { useDarkMode } from "@/context/DarkModeProvider";
import React from "react";
import { FaMoon, FaRegSun } from "react-icons/fa";

function ToggleTheme() {
  const { isDark, toggleTheme } = useDarkMode();
  return (
    <div
      onClick={toggleTheme}
      className={`fixed top-5 left-5 w-[30px] h-[30px] text-lg flex items-center justify-center rounded-sm ${
        isDark ? "bg-white" : "bg-black text-white"
      }`}
    >
      {isDark ? (
        <button>
          <FaRegSun />
        </button>
      ) : (
        <button>
          <FaMoon />
        </button>
      )}
    </div>
  );
}

export default ToggleTheme;
