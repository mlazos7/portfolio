import React from "react";
import SearchIcon from "../assets/img/desktop/icon-search.svg";
// import FilterIcon from "../assets/img/desktop/icon-filter.svg";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../slice/filterSlice";
import { RootState } from "../app/store";

const FilterByTitle = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter.value);

  return (
    <div>
      <img src={SearchIcon} alt="" />
      <input
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        type="text"
        placeholder="Filter by technology, title, description..."
      />
    </div>
  );
};

// const FilterByTechnology = () => (
//   <div>
//     <img src={FilterIcon} alt="" />
//     <input type="text" placeholder="Filter by technology..." />
//   </div>
// );


// const FilterByCode = () => (
//   <div>
//     {" "}
//     <input type="checkbox" /> <p>Open Source</p>
//   </div>
// );

const Filter = () => {
  return (
    <div className="filter filter-large">
      <FilterByTitle />
      {/* <FilterByTechnology />
      <FilterByCode /> */}
    </div>
  );
};

// const SmallFilter = () => {
//   const dispatch = useDispatch();
//   const filter = useSelector((state: RootState) => state.filter.value);

//   return (
//     <div className="filter filter-small">
//       <input
//         onChange={(e) => dispatch(setFilter(e.target.value))}
//         value={filter}
//         type="text"
//         placeholder="Filter by title, description..."
//       />
//       <img src={FilterIcon} alt="" />
//     </div>
//   );
// };

export { Filter };
