import React from "react";
import SearchIcon from "../assets/img/desktop/icon-search.svg";
import FilterIcon from "../assets/img/desktop/icon-filter.svg";

const FilterByTitle = () => {
  return (
    <div>
      <img src={SearchIcon} alt="" />
      <input type="text" placeholder="Filter by title, description..." />
    </div>
  );
};
const FilterByTechnology = () => (
  <div>
    <img src={FilterIcon} alt="" />
    <input type="text" placeholder="Filter by technology..." />
  </div>
);
const FilterByCode = () => (
  <div>
    {" "}
    <input type="checkbox" /> <p>Open Source</p>
  </div>
);

const Filter = () => {
  return (
    <div className="filter filter-large">
      <FilterByTitle />
      <FilterByTechnology />
      <FilterByCode />
    </div>
  );
};

const SmallFilter = () => {
  return (
    <div className="filter filter-small">
      <input type="text" placeholder="Filter by title, description..." />
      <img src={FilterIcon} alt="" />
    </div>
  );
};

export {
    Filter, SmallFilter
}
