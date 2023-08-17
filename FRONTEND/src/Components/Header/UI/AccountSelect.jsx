import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setLoginComponent } from "../../../Store/Reducer/headerLoginSlice";

function AccountSelect() {
  const { auth } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();

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
        <p
          className=" cursor-pointer "
          onClick={() => dispatch(setLoginComponent())}
        >
          Login
        </p>
      )}
    </div>
  );
}

export default AccountSelect;
