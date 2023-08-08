import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";

function AccountSelect() {
  return (
    <div className=" col-start-5  row-start-1 md:row-auto md:col-auto flex  h-full justify-center  items-center gap-2 text-xl">
      <div className=" hidden md:flex items-center gap-2">
        <p>Account</p>
        <IoMdArrowDropdown />
      </div>
      <BiUserCircle className=" text-4xl block md:hidden" />
    </div>
  );
}

export default AccountSelect;
