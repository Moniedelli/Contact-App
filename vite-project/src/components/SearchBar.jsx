import React from "react";
import { PropTypes } from 'prop-types';

function SearchBar({ keyword, changeKeyword }) {
  return(
    <input
      className="search-bar"
      type="text"
      placeholder="Cari berdasarkan nama"
      value={keyword}
      onChange={(event) => changeKeyword(event.target.value)}
    ></input>
  )
}
SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  changeKeyword: PropTypes.func.isRequired
}

export default SearchBar;