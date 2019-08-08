import React, { useRef } from "react";
import { ReactComponent as ArrowDown } from "../../images/down-arrow.svg";

const SearchListLaundry = props => {
  const inputField = useRef("");
  return (
    <div className="search-list-laundry">
      <input
        className="search-list-laundry__search-input"
        type="text"
        placeholder="Search..."
        ref={inputField}
      />
      <button
        className="search-list-laundry__search-btn"
        type="button"
        onClick={() => props.searchInputHandler(inputField.current.value)}
      >
        <ArrowDown />
      </button>
    </div>
  );
};

export default SearchListLaundry;
