import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function HeaderSearch() {
  return (
    <div className=" col-start-1 col-span-5 md:col-auto md:col-start-auto w-full shrink rounded-md px-3 bg-gray-100 flex items-center">
      <AiOutlineSearch className="  text-2xl " />
      <input
        className=" w-full bg-gray-100 ml-3 h-12"
        type="text"
        placeholder="Searh 'egg'"
      />
    </div>
  );
}

export default HeaderSearch;
