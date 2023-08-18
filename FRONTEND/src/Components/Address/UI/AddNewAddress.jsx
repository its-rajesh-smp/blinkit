import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { showAddressForm } from "../../../Store/Reducer/selectAddressSlice";

function AddNewAddress() {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(showAddressForm());
      }}
      className=" cursor-pointer flex items-center p-3 border rounded-sm text-green-500  text-lg gap-3"
    >
      <BiCurrentLocation />
      <p>Add New Address</p>
    </div>
  );
}

export default AddNewAddress;
