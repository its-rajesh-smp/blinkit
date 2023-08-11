import React, { useContext } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import HeaderContext from "../../../Context/HeaderContext";
import { useSelector } from "react-redux";

function AccountSelect() {
  const { auth } = useSelector((state) => state.authSlice);
  const { setLoginComponentHandeler } = useContext(HeaderContext);

  return (
    <div className=" col-start-5  row-start-1 md:row-auto md:col-auto flex  h-full justify-center  items-center gap-2 text-xl">
      {auth ? (
        <>
          <div className=" hidden md:flex items-center gap-2">
            <p>Account</p>
            <IoMdArrowDropdown />
          </div>
          <BiUserCircle className=" text-4xl block md:hidden" />
        </>
      ) : (
        <p className=" cursor-pointer " onClick={setLoginComponentHandeler}>
          Login
        </p>
      )}
    </div>
  );
}

export default AccountSelect;
