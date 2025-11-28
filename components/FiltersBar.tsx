import React from "react";

interface Props {
  handleFilter: (category: string) => void;
  handleSort: (order: string) => void;
}

const FiltersBar: React.FC<Props> = ({ handleFilter, handleSort }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <button
        onClick={() => handleFilter("all")}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        All
      </button>
      <button
        onClick={() => handleFilter("electronics")}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Electronics
      </button>
      <button
        onClick={() => handleSort("asc")}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Price: Low to High
      </button>
      <button
        onClick={() => handleSort("desc")}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Price: High to Low
      </button>
    </div>
  );
};

export default FiltersBar;