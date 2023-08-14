import React, { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";

function Select({ path, onChange, value }) {
  const [options] = useFetch(path);

  return (
    <div className=" w-full">
      <select
        className="w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={Math.random()} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
