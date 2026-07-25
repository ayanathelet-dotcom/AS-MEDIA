import React from 'react';

const filters = ["all", "cars", "bike", "story", "creative"];

const FilterBar = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="flex gap-3 flex-wrap justify-center mt-6">
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
         className={`
  px-4 py-2 rounded-full border border-gray-400 text-bike
  ${activeFilter === filter ? "bg-white text-black" : "bg-transparent"}
`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;