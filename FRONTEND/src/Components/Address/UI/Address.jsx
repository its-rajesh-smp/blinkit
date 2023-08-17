import React, { useState } from "react";

function Address() {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`${
        selected ? "bg-green-200" : "bg-white"
      } p-5 border transition-all flex justify-between items-center`}
    >
      <div className="text-xs flex flex-col gap-1">
        <p className=" font-bold">Rajesh</p>
        <p>Jorisha Simlapal Bankura, Bankura, Chhattisgarh, 722151</p>
        <div className="flex gap-5">
          <button className=" text-green-600">Edit</button>
          <button className=" text-red-600">Delete</button>
        </div>
      </div>
      <div>
        <SelectBtn selected={selected} setSelected={setSelected} />
      </div>
    </div>
  );
}

export default Address;

import { TiTick } from "react-icons/ti";
function SelectBtn({ selected, setSelected }) {
  // On Click Select Box
  const onClickHandeler = () => {
    setSelected((p) => !p);
  };

  return (
    <div
      onClick={onClickHandeler}
      className={`${
        selected && "border-gray-700"
      } flex cursor-pointer transition-all justify-center items-center w-10 h-10 border`}
    >
      {selected && <TiTick className=" text-2xl" />}
    </div>
  );
}
