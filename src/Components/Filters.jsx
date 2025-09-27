import React, { useState } from "react";

const Filters = ({ setFilter }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleClick = (filterType) => {
    setActiveFilter(filterType);
    setFilter(filterType);
  };

  const getButtonClass = (filterType) =>
    activeFilter === filterType
      ? "bg-indigo-500 text-white px-4 py-1 font-semibold rounded-md"
      : "dark:bg-gray-900 text-black dark:text-white px-4 py-1 rounded-md hover:scale-103 transition";

  return (
    <div className="flex flex-wrap gap-3 sm:gap-5 p-3 border border-gray-300 rounded-md mb-5">
      <button
        onClick={() => handleClick("all")}
        className={getButtonClass("all")}
      >
        All Tasks
      </button>
      <button
        onClick={() => handleClick("active")}
        className={getButtonClass("active")}
      >
        Pending
      </button>
      <button
        onClick={() => handleClick("completed")}
        className={getButtonClass("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default Filters;
