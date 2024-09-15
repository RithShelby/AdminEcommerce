import React from "react";

const SelectData = ({ value, onchange, children }) => {
  return (
    <select className="form-select py-3 " value={value} onChange={onchange}>
      {children}
    </select>
  );
};

export default SelectData;
