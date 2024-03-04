"use client";

import { useTheme } from "next-themes";
import { LuSunDim, LuMoonStar } from "react-icons/lu";

const ThemeMode = ({ fixed = true }) => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div className={fixed ? "fixed top-7 right-7" : ""}>
      {resolvedTheme === "dark" ? (
        <LuSunDim
          className="p-1 rounded-md bg-primary-100 text-primary-400 hover:brightness-90 text-2xl cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <LuMoonStar
          className="p-1 rounded-md bg-primary-100 text-primary-400 hover:brightness-90 text-2xl cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};

export default ThemeMode;
