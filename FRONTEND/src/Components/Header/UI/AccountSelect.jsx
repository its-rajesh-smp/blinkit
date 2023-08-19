import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setLoginComponent } from "../../../Store/Reducer/headerLoginSlice";
import UserDropDown from "./UserDropDown";

function AccountSelect() {
  const { auth } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const [options, showOptions] = useState(false);

  return (
    <div className=" select-none relative col-start-5  row-start-1 md:row-auto md:col-auto flex  h-full justify-center  items-center gap-2 text-xl">
      {auth ? (
        <>
          <div
            onClick={() => showOptions((p) => !p)}
            className=" cursor-pointer hidden md:flex items-center gap-2"
          >
            <p>Account</p>
            {options ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </div>
          <BiUserCircle
            onClick={() => showOptions((p) => !p)}
            className=" text-4xl block md:hidden"
          />
        </>
      ) : (
        <p
          className=" cursor-pointer "
          onClick={() => dispatch(setLoginComponent())}
        >
          Login
        </p>
      )}
      {options && <UserDropDown showOptions={showOptions} />}
    </div>
  );
}

export default AccountSelect;
