import React from "react";
import './Search.css';

const Search = (props) => {
  return (
   <input onChange={props.searchHandler} placeholder="search :)" id="searchInput"/>
  );
};

export default Search;