import React from "react";
import InputButton from "../../Input/InputButton";
import { useDispatch } from "react-redux";
import { showAddressForm } from "../../../Store/Reducer/selectAddressSlice";

function NoAddressPresent() {
  const dispatch = useDispatch();

  const onAddBtnClick = () => {
    dispatch(showAddressForm());
  };
  return (
    <div className=" flex flex-col gap-5 justify-center items-center">
      <img src="https://grossy-app.vercel.app/images/no_address.webp" alt="" />
      <div className=" flex justify-center items-center flex-col">
        <p className="font-bold text-xl">No address present</p>
        <p className=" text-sm">Tell us where you want your orders delivered</p>
      </div>
      <InputButton
        onClick={onAddBtnClick}
        className="h-10 bg-green-500 w-fit px-3 text-sm rounded-sm  "
        placeHolder="ADD NEW ADDRESS"
      />
    </div>
  );
}

export default NoAddressPresent;
