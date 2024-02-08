"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ToggleTheme: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <svg viewBox="0 0 24 24" fill="#ebeced" height="3em" width="3em">
        <path d="M12 2a10 10 0 0110 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2m0 8.5a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5 1.5 1.5 0 00-1.5-1.5m-5.5 0A1.5 1.5 0 005 12a1.5 1.5 0 001.5 1.5A1.5 1.5 0 008 12a1.5 1.5 0 00-1.5-1.5m11 0A1.5 1.5 0 0016 12a1.5 1.5 0 001.5 1.5A1.5 1.5 0 0019 12a1.5 1.5 0 00-1.5-1.5z" />
      </svg>
    );
  }

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          aria-label="switch to light mode"
          onClick={() => setTheme("light")}
          className="rounded-full bg-gray-500 p-3 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-transparent dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-transparent md:p-2.5"
        >
          <svg
            id="theme-toggle-dark-icon"
            className="h-6 w-6 md:h-7 md:w-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
        </button>
      );
    } else {
      return (
        <button
          aria-label="switch to dark mode"
          onClick={() => setTheme("dark")}
          className="rounded-full bg-[#ebeced]/70 p-3 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-transparent dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-transparent md:p-2.5"
        >
          {/* old for light-mode-button bg-gray-400 text-gray-500 */}
          <svg
            id="theme-toggle-light-icon"
            className="h-6 w-6 md:h-7 md:w-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      );
    }
  };
  return <>{renderThemeChanger()}</>;
};
