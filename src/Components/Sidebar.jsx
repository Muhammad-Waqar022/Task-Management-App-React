import React from "react";
import { Calendar, UserRound, Briefcase } from "lucide-react";

const Sidebar = () => {
  const Categories = [
    { name: "Today", icon: <Calendar size={18} /> },
    { name: "Work", icon: <Briefcase size={18} /> },
    { name: "Personal", icon: <UserRound size={18} /> },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Logo</h1>
        <p className="text-sm text-gray-400">Your tagline</p>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Categories</h2>
        <ul className="space-y-3">
          {Categories.map((c, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer"
            >
              {c.icon}
              <span>{c.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Summary */}
      <div className="mt-15">
        <h2 className="text-lg font-semibold mb-3">Summary</h2>
        <p className=" text-gray-400">
          Active Tasks: <span className="text-white ">0</span>
        </p>
        <p className=" text-gray-400">
          Completed: <span className="text-white ">0</span>
        </p>
        <p className=" text-gray-400">
          Total: <span className="text-white ">0</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
