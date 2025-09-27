// import React from "react";
// import { PanelLeft, Moon, Sun } from "lucide-react";
// import Search from "./Search";
// import { ThemeContext } from "../Context/ThemeContext";
// import { useContext } from "react";
// import { TaskContext } from "../Context/TaskContext";

// const Header = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const { category } = useContext(TaskContext);
//   return (
//     <div className="flex justify-between items-center p-5 border-b ">
//       <div className="flex items-center gap-3 text-xl font-semibold">
//         <PanelLeft className="text-black dark:text-white"/>
//         <span className="text-black dark:text-white text-4xl">{category || "Today"}</span>
//       </div>

//       <div className="flex items-center gap-5">
//         <Search />
//         <button
//           onClick={toggleTheme}
//           className="flex items-center gap-2  text-gray-600 hover:text-black"
//         >
//           {theme === "light" ? <Moon  className="hover:text-stone-800"/> : <Sun  className="hover:text-yellow-500"/>}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header;
import React, { useContext } from "react";
import { PanelLeft, Moon, Sun } from "lucide-react";
import Search from "./Search";
import { ThemeContext } from "../Context/ThemeContext";
import { TaskContext } from "../Context/TaskContext";

const Header = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { category } = useContext(TaskContext);

  return (
    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="flex items-center gap-3">
        <button onClick={toggleSidebar}><PanelLeft className="text-gray-800 dark:text-gray-200 w-7 h-7" /></button>
        
        <span className="text-gray-900 dark:text-gray-100 text-2xl font-bold tracking-tight">
          {category || "Today"}
        </span>
      </div>

      <div className="flex items-center gap-6">
        <Search />
        <button
          onClick={toggleTheme}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-yellow-400 transition"
        >
          {theme === "light" ? (
            <Moon className="w-6 h-6" />
          ) : (
            <Sun className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
