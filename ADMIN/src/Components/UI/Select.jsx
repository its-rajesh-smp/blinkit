import React from "react";

function Select({ path, onChange, value }) {
  return (
    <div className=" w-full">
      <select
        className="w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Cloathing</option>
        <option value="">Electronics</option>
      </select>
    </div>
  );
}

export default Select;
