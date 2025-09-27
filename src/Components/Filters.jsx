// import React from "react";
// import { useState } from "react";

// const Filters = ({ setFilter }) => {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <div className="flex gap-5 p-3 border border-gray-300 rounded-md mb-5">
//       <button onClick={() => (setFilter("all"))} className="bg-blue-500 text-white px-4 py-1 rounded-md">All Tasks</button>
//       <button onClick={() => setFilter("active")} className="px-4 py-1 rounded-md">Pending</button>
//       <button onClick={() => setFilter("completed")} className="px-4 py-1 rounded-md">Completed</button>
//     </div>
//   );
// };

// export default Filters;


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
      : "dark:bg-gray-900 text-black dark:text-white px-4 py-1 rounded-md hover:scale-103";

  return (
    <div className="flex gap-5 p-3 border border-gray-300 rounded-md mb-5">
      <button onClick={() => handleClick("all")} className={getButtonClass("all")}>
        All Tasks
      </button>
      <button onClick={() => handleClick("active")} className={getButtonClass("active")}>
        Pending
      </button>
      <button onClick={() => handleClick("completed")} className={getButtonClass("completed")}>
        Completed
      </button>
    </div>
  );
};

export default Filters;
