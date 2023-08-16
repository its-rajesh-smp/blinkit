import React from "react";
import Type from "./Type";

function TypesContainer() {
  return (
    <div className=" mt-10">
      <p className=" text-sm px-1 py-2 ">Select Unit</p>
      <div className=" flex flex-col gap-4 ">
        <Type />
        <Type />
        <Type />
      </div>
    </div>
  );
}

export default TypesContainer;
