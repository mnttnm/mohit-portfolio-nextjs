"use client";

import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type ThemeType = "light" | "dark";

export interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(
  null
);

export const ThemeContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const getCurrentTheme = useCallback((): ThemeType => {
    if (typeof window === "undefined") return "light" as ThemeType;
    // Default theme if not in the browser
    const theme = window.localStorage.getItem("theme")
      ? window.localStorage.getItem("theme")
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    console.log(theme);
    return theme as ThemeType;
  }, []);

  useEffect(() => {
    const theme = getCurrentTheme();
    if (theme === "dark")
      document.documentElement.classList.add("dark");
    // note: this is for tailwind to allow it to use dark:<class> classes
    else document.documentElement.classList.remove("dark");
    setTheme(theme);
  }, [setTheme, getCurrentTheme]);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
