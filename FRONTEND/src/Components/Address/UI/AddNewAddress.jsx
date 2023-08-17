import React from "react";
import { BiCurrentLocation } from "react-icons/bi";

function AddNewAddress() {
  return (
    <div className=" cursor-pointer flex items-center p-3 border rounded-sm text-green-500  text-lg gap-3">
      <BiCurrentLocation />
      <p>Add New Address</p>
    </div>
  );
}

export default AddNewAddress;
