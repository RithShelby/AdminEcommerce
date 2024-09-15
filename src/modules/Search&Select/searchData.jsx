import React, { useState } from "react";

const Search = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="search"
      className="form-control col-sm-5 py-3 rounded-3 me-3"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Search;
