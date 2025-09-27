import React, { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

const Search = () => {
  const { searchText, setSearchText } = useContext(TaskContext);

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search Tasks..."
        className="border border-gray-300 rounded-md p-1 w-90 h-10 dark:text-white"
      />
    </div>
  );
};

export default Search;
