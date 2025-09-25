import React from "react";
import { useState } from "react";


const Search = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search Tasks..."
        className="border border-gray-300 rounded-md p-1"
      />
    </div>
  );
};

export default Search;
