import React, { useContext } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import HeaderContext from "../../../Context/HeaderContext";

function AccountSelect() {
  const auth = false;
  const { setLoginComponentHandeler } = useContext(HeaderContext);

  return (
    <div className=" col-start-5  row-start-1 md:row-auto md:col-auto flex  h-full justify-center  items-center gap-2 text-xl">
      {!auth ? (
        <p className=" cursor-pointer " onClick={setLoginComponentHandeler}>
          Login
        </p>
      ) : (
        <>
          <div className=" hidden md:flex items-center gap-2">
            <p>Account</p>
            <IoMdArrowDropdown />
          </div>
          <BiUserCircle className=" text-4xl block md:hidden" />
        </>
      )}
    </div>
  );
}

export default AccountSelect;
