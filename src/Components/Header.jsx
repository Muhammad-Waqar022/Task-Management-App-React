import React, { useContext } from "react";
import { PanelLeft, Moon, Sun } from "lucide-react";
import Search from "./Search";
import { ThemeContext } from "../Context/ThemeContext";
import { TaskContext } from "../Context/TaskContext";

const Header = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { category } = useContext(TaskContext);

  return (
    <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="flex items-center gap-2 sm:gap-3">
        <button onClick={toggleSidebar}>
          <PanelLeft className="text-gray-800 dark:text-gray-200 w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        <span className="text-gray-900 dark:text-gray-100 text-lg sm:text-2xl font-bold tracking-tight">
          {category || "Today"}
        </span>
      </div>

      <div className="flex items-center gap-3 sm:gap-6">
        <div className="hidden sm:block">
          <Search />
        </div>
        <button
          onClick={toggleTheme}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-yellow-400 transition"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Sun className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
