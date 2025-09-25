import React from "react";
import { PanelLeft, Moon, Sun } from "lucide-react";
import Search from "./Search";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 border-b ">
      {/* Left side */}
      <div className="flex items-center gap-3 text-xl font-semibold">
        <PanelLeft />
        <span>Today</span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-5">
        <Search />
        <button className="flex items-center gap-2 text-gray-600 hover:text-black">
          <Moon />
          <Sun />
        </button>
      </div>
    </div>
  );
};

export default Header;
